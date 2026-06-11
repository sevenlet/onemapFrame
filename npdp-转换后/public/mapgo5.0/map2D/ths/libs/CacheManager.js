const DB_NAME = 'meegisTHS';
const TABLE_NAME = 'ths_search_cache';

const isExpired = (time) => {
  const now = new Date().getTime();
  // 计算两个日期之间的时间差（毫秒）
  const timeDifference = Math.abs(now - time);

  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  // 判断是否在7天内
  return daysDifference > 7;
};

const delCacheByExpired = async (db, uid) => {
  let clearRequest = null;

  if (uid) {
    const objectStore = db.transaction([TABLE_NAME], 'readwrite').objectStore(TABLE_NAME);
    clearRequest = objectStore.delete(uid);
  }
  clearRequest.onsuccess = function () {
    console.log('clear cache success');
  };
};

export const getDBConnection = async () => {
  const request = window.indexedDB.open(DB_NAME);
  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    if (!db.objectStoreNames.contains(TABLE_NAME)) {
      const table = db.createObjectStore(TABLE_NAME, { keyPath: 'uid' });
      table.createIndex('uid', 'uid', { unique: true });
    }
  };
  return await new Promise((resolve, reject) => {
    let completed = false;
    request.onsuccess = function () {
      if (completed === false) {
        completed = true;
        resolve(request.result);
      } else {
        request.result.close();
      }
    };
    request.onerror = function (err) {
      if (completed === false) {
        completed = true;
        reject(err);
      }
    };
  });
};
export const getRecords = async (db, uid) => {
  const transaction = db.transaction([TABLE_NAME], 'readonly');
  const table = transaction.objectStore(TABLE_NAME);
  const request = table.get(uid);
  const records = await new Promise((resolve, reject) => {
    request.onsuccess = function (event) {
      const data = event.target.result;
      if (data) {
        if (!isExpired(data.cacheTime)) {
          resolve(data);
        } else {
          reject(uid);
          // 删除过期缓存
          delCacheByExpired(db, uid);
        }
      } else {
        reject(uid);
      }
    };
    request.onerror = function () {
      reject(new Error('getRecords error'));
    };
  });
  return records;
};

export const setRecords = async (db, records) => {
  const { uid, data } = records;
  const transaction = db.transaction([TABLE_NAME], 'readwrite');
  const table = transaction.objectStore(TABLE_NAME);
  const time = new Date().getTime();
  const newData = { uid, value: data, cacheTime: time };
  const request = table.add(newData);
  new Promise((resolve) => {
    request.onsuccess = function () {
      resolve(request.result);
    };
    request.onerror = function () {
      resolve('error');
    };
  });
};
