var timeLine = timeLine || {};
var historyTimeLine = {};
(function () {
	// 自实现DOM操作
	var DOM = {
		/**
		 * 根据查询条件获取对应的DOM元素
		 * @param {(element | string)} query DOM/查询条件字符串
		 * @returns {(element | undefined)}
		 */
		getElement: function (query) {
			if (this.isDOM(query)) {
				return query;
			}
			return document.querySelector(query);
		},
		
		/**
		 * 根据查询条件获取对应的DOM元素
		 * @param {(element | string)} query DOM/查询条件字符串
		 * @returns {(elements | undefined)}
		 */
		getElements: function (query) {
			if (this.isDOM(query)) {
				return [query];
			}
			return document.querySelectorAll(query);
		},

		/**
		 * 改变element的样式
		 * @param {(element | string)} element 要操作的元素/查询条件
		 * @param {object} styleObj 要改变的样式
		 * @example {
		 *  width: '50px',
		 * }
		 */
		setElementStyle: function (element, styleObj) {
      var operationalElement = this.getElement(element);
      if (operationalElement) {
        // eslint-disable-next-line no-return-assign
        Object.keys(styleObj).forEach(function (key) {
          operationalElement.style[key] = styleObj[key];
        });
      }
    },

    /**
		 * 批量改变element的样式
		 * @param {(element | string)} element 要操作的元素/查询条件
		 * @param {object} styleObj 要改变的样式
		 * @example {
		 *  width: '50px',
		 * }
		 */
		setElementsStyle: function (element, styleObj) {
      var operationalElements = this.getElements(element);
      if (operationalElements) {
        operationalElements.forEach(function (operationalElement) {
          // eslint-disable-next-line no-return-assign
          Object.keys(styleObj).forEach(function (key) {
            operationalElement.style[key] = styleObj[key];
          });
        });
      }
    },

		/**
     * 检测一个变量是否是HTML元素
     * @param {any} param 要进行判断的变量
     * @returns {boolean}
     * @desc 在低版本中不支持 instanceof，因此通过判断一些DOM特有的属性进行判断
     */
		isDOM: function (param) {
			return typeof param === 'object'
				? param instanceof HTMLElement
				: (param && typeof param === 'object' && param.nodeType === 1 && typeof param.nodeName === 'string');
		},
		/**
     * 获取DOM对象的某个属性
     * @param {(element | string)} element 要隐藏的元素|查询条件
     * @param {string} attribute 要查询的属性
     * @return {(string | number | undefined)}
     */
		getElementAttribute: function (element, attribute) {
			var operationalElement = this.getElement(element);
			if (operationalElement) {
				return operationalElement[attribute];
			}
		},

		/**
     * 设置元素隐藏
     * @param {(element | string)} element 要隐藏的元素|查询条件
     */
		hide: function (element) {
			var operationalElement = this.getElement(element);
			if (operationalElement) {
				// 设置元素隐藏有两种方式：1. 给标签添加 hidden 属性 2. 设置 display
				// 这里采用第二种方式
				this.setElementStyle(operationalElement, {
					display: 'none',
				});
			}
		},
		/**
		 * 设置元素显示
		 * @param {(element | string)} element 要隐藏的元素|查询条件
		 */
		show: function (element) {
			var operationalElement = this.getElement(element);
			if (operationalElement) {
				// 设置元素隐藏有两种方式：1. 给标签添加 hidden 属性 2. 设置 display
				// 需要根据这两种方式都设置为显示，才能保证元素一定能显示（已设为透明的不管）
				this.setElementStyle(operationalElement, {
					display: 'block',
				});
				operationalElement.hidden = false;
			}
		},

    /**
     * 给元素添加一个类名
     * @param {(element | string)} element 要添加的元素|查询条件
     * @param {string} className 要添加的类名
     */
		 addClass: function (element, className) {
      var operationalElement = this.getElement(element);
      if (operationalElement) {
        return operationalElement.classList.add(className);
      }
    },

    /**
     * 给元素移除一个类名
     * @param {(element | string)} element 要操作的元素|查询条件
     * @param {string} className 要移除的类名
     */
    removeClass: function (element, className) {
      var operationalElement = this.getElement(element);
      if (operationalElement) {
        return operationalElement.classList.remove(className);
      }
    },

		/**
     * 判断某个DOM元素中是否存在某个类名
     * @param {(element | string)} element 要隐藏的元素|查询条件
     * @param {string} className 要查询的类名
     * @desc
     * 1. 如果找不到对应的元素，也将返回false
     * 2. 不兼容IE10以下
     */
		hasClass: function (element, className) {
			var operationalElement = this.getElement(element);
			if (operationalElement) {
				return operationalElement.classList.contains(className);
			}
			return false;
		},

		/**
     * 在要查询的要素内部根据条件返回元素
     * @param {element} element 要查询的元素
     * @param {string} queryStr 查询条件
     * @example '.layer-data'
     */
		find: function (element, queryStr) {
			if (this.isDOM(element)) {
				return element.querySelectorAll(queryStr);
			}
		}
	};
	function TimeLine() {};
	TimeLine.prototype = {
		/**
		 * 根据类型，获取对应的日期格式
		 * time：当前时间，params需要返回的日期格式
		 */
		dateFormat: function (time, params) {
			var _this = this;
			var newTime;
			var year = time.getFullYear();
			var month = _this.zeroValFun(time.getMonth() + 1);
			var day = _this.zeroValFun(time.getDate());
			var hours = _this.zeroValFun(time.getHours());
			var minutes = _this.zeroValFun(time.getMinutes());
			if (params === 'yyyy-mm-dd hh:mm') {
				newTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
			} else if (params === 'yyyy-mm-dd hh') {
				newTime = year + '-' + month + '-' + day + ' ' + hours;
			} else if (params === 'yyyy-mm-dd') {
				newTime = year + '-' + month + '-' + day;
			} else if (params === 'yyyy-mm') {
				newTime = year + '-' + month;
			} else if (params === 'yyyy') {
				newTime = year;
			}
			return newTime;
		},
		/**
		 * 渲染基本的html
		 */
		addHtml: function () {
			var _this = this;
			//先清空再添加
			this.box.innerHTML = '';
			var timeLineMain = '<div class="time-line-play"><i class="play"></i></div><div class="time-line-info"><div class="scroll-bar"></div><ul class="time-data"></ul><div class="time-line-partition"><p>实测</p><p>预测</p></div><div class="time-line-partition-bg"></div></div>';
			this.box.innerHTML = timeLineMain;
			//ie下，月类型传yyyy/mm报错，所以改为yyyy/mm/dd
			if (_this.timeType === 'month') {
				_this.startTime = _this.startTime + '/01';
				_this.endTime = _this.endTime + '/01';
				_this.curDate = _this.curDate + '/01';
				if (_this.partitionTime) {
					_this.partitionTime = _this.partitionTime + '/01';
				}
			}
			if(!_this.dataSource || _this.dataSource !== "interface"){
				//获取最大时间的索引，获取设置默认选择时间的索引
				var startDate = new Date(_this.startTime);
				var endDate = new Date(_this.endTime);
				var curDate = new Date(_this.curDate);
				var partitionDate = new Date(_this.partitionTime); //分区时间
				if (_this.timeType === 'year') {
					var startMonth = startDate.getFullYear();
					var endMonth = endDate.getFullYear();
					var curMonth = curDate.getFullYear();
					var partitionMonth = partitionDate.getFullYear();
					_this.maxValue = endMonth - startMonth;
					if (_this.curDate) {
						_this.value = curMonth - startMonth;
					}
					//分区
					if (_this.partitionTime) {
						_this.partitionValue = partitionMonth - startMonth;
					}
					for (var i = 0; i <= _this.maxValue; i++) {
						_this.allTime.push({
							index: i,
							time: startMonth + i + '-01-01'
						});
					}
				} else if (_this.timeType === 'hour') {
					_this.maxValue = parseInt(Math.abs(startDate - endDate) / 1000 / 60 / 60);
					if (_this.curDate) {
						_this.value = parseInt(Math.abs(startDate - curDate) / 1000 / 60 / 60);
					}
					//分区
					if (_this.partitionTime) {
						_this.partitionValue = parseInt(Math.abs(startDate - partitionDate) / 1000 / 60 / 60);
					}
					//组织时间
					var newTime = new Date(_this.startTime);
					for (var i = 0; i <= _this.maxValue; i++) {
						_this.allTime.push({
							index: i,
							time: _this.dateFormat(newTime, 'yyyy-mm-dd hh') + ':00'
						});
						newTime.setHours(newTime.getHours() + 1);
					}
				} else if (_this.timeType === 'day') {
					_this.maxValue = parseInt(Math.abs(startDate - endDate) / 1000 / 60 / 60 / 24);
					if (_this.curDate) {
						_this.value = parseInt(Math.abs(startDate - curDate) / 1000 / 60 / 60 / 24);
					}
					//分区
					if (_this.partitionTime) {
						_this.partitionValue = parseInt(Math.abs(startDate - partitionDate) / 1000 / 60 / 60 / 24);
					}
					//组织时间
					var newTime = new Date(_this.startTime);
					for (var i = 0; i <= _this.maxValue; i++) {
						var d = new Date(newTime - 0 + (i * 1) * 86400000);
						_this.allTime.push({
							index: i,
							time: _this.dateFormat(d, 'yyyy-mm-dd')
						});
					}
				} else if (_this.timeType === 'month') {
					var startMonth = startDate.getMonth();
					var endMonth = endDate.getMonth();
					var curMonth = curDate.getMonth();
					var partitionMonth = partitionDate.getMonth();
					_this.maxValue = (endDate.getFullYear() * 12 + endMonth) - (startDate.getFullYear() * 12 + startMonth);
					if (_this.curDate) {
						_this.value = (curDate.getFullYear() * 12 + curMonth) - (startDate.getFullYear() * 12 + startMonth);
					};
					//分区
					if (_this.partitionTime) {
						_this.partitionValue = (partitionDate.getFullYear() * 12 + partitionMonth) - (startDate.getFullYear() * 12 + startMonth);
					}
					//组织时间
					var newTime = new Date(_this.startTime);
					var monthIndex = newTime.getMonth();
					for (var i = 0; i <= _this.maxValue; i++) {
						_this.allTime.push({
							index: i,
							time: _this.dateFormat(newTime, 'yyyy-mm')
						});
						if (monthIndex >= 12) {
							monthIndex = 0;
						};
						monthIndex += 1;
						newTime.setMonth(monthIndex);
					}
				} else if (_this.timeType === 'minutes') {
					_this.maxValue = parseInt(Math.abs(startDate - endDate) / 1000 / 60 / _this.timeAccuracy);
					if (_this.curDate) {
						_this.value = parseInt(Math.abs(startDate - curDate) / 1000 / 60 / _this.timeAccuracy);
					}
					//分区
					if (_this.partitionTime) {
						_this.partitionValue = parseInt(Math.abs(startDate - partitionDate) / 1000 / 60);
					}
					//组织时间
					var newTime = new Date(_this.startTime);
					var minutesIndex = newTime.getMinutes();
					for (var i = 0; i <= _this.maxValue; i += 1) {
            var tempTime = new Date(_this.startTime);
            tempTime.setMinutes(minutesIndex + (i * _this.timeAccuracy));
						_this.allTime.push({
							index: i,
							time: _this.dateFormat(tempTime, 'yyyy-mm-dd hh:mm')
						});
					}
				}
			} else {
				var timeList = window.timeLines.currentTimeLine.options.timeList;
				_this.maxValue = timeList.length;
				_this.value =timeList.findIndex(function(item){
					return item[_this.dateField] === _this.curDate;
				});
				if (_this.value === -1){
					_this.value = 0;
				}
				_this.partitionValue = timeList.findIndex(function(item){
					return item[_this.dateField] === _this.partitionTime;
				});
				timeList.forEach(function(time,index){
					_this.allTime.push({
						index: index,
						time: time[_this.dateField]
					});
				});
			}
			//设置标注
			_this.setLineLabel();
			//设置默认选择时间点及位置
			setTimeout(function () {
				if(_this.isCallBack === 'true'){
					_this.setActiveTime(_this.value);
				} else {
					_this.setActiveTime(_this.value,'first');
				}
			}, 100);
		},
		/**
		 * 设置第一层的标注
		 */
		setLineLabel: function () {
			var _this = this;
			var dateInfo ={};
			if(_this.line.times && _this.line.times.length>0){
				_this.line.timeInterval = [];
				var thisTimeIndex =0;
				var lastTimeIndex =0;
				for (var i = 0; i < _this.line.times.length; i++) {
					_this.allTime.forEach(function(timeInfo,index){
						if( _this.line.times[i] ===timeInfo.time){
							thisTimeIndex = index;
						}
					});
					if( i !==0){
						_this.line.timeInterval.push({index: lastTimeIndex,time:_this.line.times[i-1],interval:thisTimeIndex - lastTimeIndex});
					}
					lastTimeIndex = thisTimeIndex;
				}
				_this.line.timeInterval.push({index:_this.line.times.length-1,time:_this.line.times[_this.line.times.length-1],interval:0});
			}
			// 生成列表HTML字符串
			var ulHTMLStr = '';
			for (var i = 0; i < _this.allTime.length; i++) {
				dateInfo.year = _this.allTime[i].time.substr(0, 4);
				dateInfo.month = _this.allTime[i].time.substr(5, 2);
				dateInfo.day = _this.allTime[i].time.substr(8, 2);
				dateInfo.hour = _this.allTime[i].time.substr(11, 2);
				dateInfo.minutes = _this.allTime[i].time.substr(14, 2);
				var time =  _this.combinedDate(_this.label.format,dateInfo);
				var timeTip ;
				if (_this.timeType === 'minutes') {
					timeTip=_this.combinedDate('yyyy-mm-dd hh:mm',dateInfo);
				} else if (_this.timeType === 'hour') {
					timeTip=_this.combinedDate('yyyy-mm-dd hh:mm',dateInfo);
				} else if (_this.timeType === 'day') {
					timeTip=_this.combinedDate('yyyy-mm-dd',dateInfo);
				} else if (_this.timeType === 'month') {
					timeTip=_this.combinedDate('yyyy-mm',dateInfo);
				} else if (_this.timeType === 'year') {
					timeTip=_this.combinedDate('yyyy',dateInfo);
				}
				//动态添加class，设置时间节点标注显示隐藏
				var labelSpanClass = '';
				//动态添加class，设置时间线（长）显示隐藏
				var longLineClass = '';
				//动态添加class，设置时间线（短）显示隐藏
				var shortLineClass = '';
				if(_this.line.times && _this.line.times.length>0){
					   //标注默认都隐藏
					   labelSpanClass = 'opacity';
                      if(_this.line.times.indexOf(_this.allTime[i].time)<0){
						  longLineClass = 'opacity';
						  shortLineClass = 'opacity';
					  }
				}else{
					if (i % _this.label.interval !== 0) {
						labelSpanClass = 'opacity';
					}
					if (i % _this.line.longInterval !== 0) {
						longLineClass = 'opacity';
					}
					if (i % _this.line.shortInterval !== 0) {
						shortLineClass = 'opacity';
					}
					// //最后一个标注不显示
					// if(i === _this.allTime.length-1){
					// 	labelSpanClass = 'opacity';
					// }
				}
				ulHTMLStr += '<li style="width:' + (100 / _this.maxValue) + '%;"><div class="time-data-long-item' + longLineClass + '"></div><div class="time-data-short-item' + shortLineClass + '"><div><div class="tooltip ' + _this.timeType + '">' + timeTip + '</div><span class="' + labelSpanClass + '">' + time + '</span></li>';
			}
			// 添加到指定位置
			var labels = DOM.find(_this.box, '.time-data');
			if (labels) {
				labels.forEach(function (label) {
					label.innerHTML = ulHTMLStr;
				});
			}
			// 标注自身的长度
			var labelWidth = DOM.getElementAttribute('.time-line .time-data span', 'offsetWidth');
			// 标注间隔的长度
			var unitlineWidth = DOM.getElement('.time-line .time-data').childNodes[0].offsetWidth;
			var left;
			if(_this.label.position === 'left'){
				//left = labelWidth /2;
				left = 0;
			} else if(_this.label.position === 'center'){
				//left = unitlineWidth * _this.label.interval/2;
				left = unitlineWidth * _this.label.interval/2;
			}else if (_this.label.position === 'right'){
				//left = unitlineWidth * _this.label.interval - labelWidth /2;
				left = unitlineWidth * _this.label.interval ;
			}

			DOM.setElementsStyle('.time-line .time-data span', {
				left: String(left).concat('px'),
			});

			//判断是否需要实测和预测
			if (_this.partitionTime) {
				var partitionX = (100 / _this.maxValue) * _this.partitionValue + '%';
				var timelinePartitions = DOM.find(_this.box, '.time-line-partition');
				if (timelinePartitions) {
					timelinePartitions.forEach(function (timelinePartition) {
						DOM.show(timelinePartition);
						DOM.setElementStyle(timelinePartition, {
							left: partitionX,
						});
					});
				}
				var timelinePartitionBgs = DOM.find(_this.box, '.time-line-partition-bg');
				if (timelinePartitionBgs) {
					timelinePartitionBgs.forEach(function (timelinePartitionBg) {
						DOM.show(timelinePartitionBg);
						DOM.setElementStyle(timelinePartitionBg, {
							left: partitionX,
							width: 'calc(100% - '.concat(partitionX, ")'"),
						});
					});
				}
			}
		},

		/**
		 * 拼接指定格式的日期
		 */
		combinedDate: function (format,dateInfo){
			var date = "";
			switch(format){
				case'yyyy':
					date = dateInfo.year;
					break;
				case'mm':
					date = dateInfo.month;
					break;
				case'dd':
					date = dateInfo.day;
					break;
				case'hh':
					date = dateInfo.hour;
					break;
				case'yyyy-mm':
					date = dateInfo.year + '-'+ dateInfo.month;
					break;
				case'mm-dd':
					date = dateInfo.month + '-'+ dateInfo.day;
					break;
				case'dd hh':
					date = dateInfo.day + ' '+ dateInfo.hour + ':00';
					break;
				case'hh:mm':
					date = dateInfo.hour + ': '+ dateInfo.minutes;
					break;
				case'yyyy-mm-dd':
					date = dateInfo.year + '-'+ dateInfo.month + '-'+ dateInfo.day;
					break;
				case'yyyy-mm-dd hh':
					date = dateInfo.year  + '-'+ dateInfo.month + '-'+ dateInfo.day + ' ' + dateInfo.hour;
					break;
				case'yyyy-mm-dd hh:mm':
					if(dateInfo.minutes){
						date = dateInfo.year  + '-'+ dateInfo.month  + '-'+  dateInfo.day + ' ' + dateInfo.hour + ':' + dateInfo.minutes;
					}else{
						date = dateInfo.year  + '-'+ dateInfo.month  + '-'+  dateInfo.day + ' ' + dateInfo.hour + ':00';
					}
					break;
				default:
					break;
			}
			return date;
		},
		/**
		 * 绑定事件
		 */
		bindEvent: function () {
			var _this = this;
			//解绑所有事件;
			// _this.box.unbind();
			//是否默认自动播放
			if (_this.startPlay) {
				var playDoms = DOM.find(_this.box, '.play');
				if (playDoms) {
					playDoms.forEach(function(playDom) {
						DOM.removeClass(playDom, 'play');
						DOM.addClass(playDom, 'stop');
					});
				}
				_this.startPlay = true;
				_this.autoPlayFun();
			}
			//点击刻度播放
			var timelineLongItems = DOM.find(this.box, '.time-data-long-item');
			if (timelineLongItems) {
				for (var i = 0; i < timelineLongItems.length; i++) {
					timelineLongItems[i].onclick = function () {
						// 获取所有li
						var timelineLis = DOM.getElements('.time-line .time-data li');
						// 判断当前点击元素在整个ul li 中的位置
						if (timelineLis && timelineLis.length) {
							for(var i = 0; i < timelineLis.length; i++) {
								if (timelineLis[i] === this.parentNode) {
									_this.value = i;
									break;
								}
							}
							_this.setActiveTime(_this.value);
						};
					}
				}
			}

			var timelineShortItems = DOM.find(this.box, '.time-data-short-item');
			if (timelineShortItems) {
				for (var i = 0; i < timelineShortItems.length; i++) {
					timelineShortItems[i].onclick = function () {
						// 获取所有li
						var timelineLis = DOM.getElements('.time-line .time-data li');
						// 判断当前点击元素在整个ul li 中的位置
						if (timelineLis && timelineLis.length) {i
							for(var i = 0; i < timelineLis.length; i++) {
								if (timelineLis[i] === this.parentNode) {
									_this.value = i;
									break;
								}
							}
							_this.setActiveTime(_this.value);
						}
					}
				}
			}
			// 播放
			var plays = DOM.find(this.box, '.play');
			if (plays) {
				for (var i = 0; i < plays.length; i++) {
					plays[i].onclick = function () {
						var status;
						if (DOM.hasClass(this, 'play')) {
							// 当前是播放，切换到暂停
							this.classList.remove('play');
							this.classList.add('stop');
							_this.startPlay = true;
							if (_this.isRememberTime) {
								_this.rememberValue = _this.value;
							}
							_this.autoPlayFun();
							status = 'start';
						} else {
							this.classList.remove('stop');
							this.classList.add('play');
							_this.startPlay = false;
							clearInterval(_this.autoPlay);
							status = 'stop';
						}
						publishEvent('timeLinePlay', {
							status,
						  currentTime: _this.allTime[_this.value].time
					  });
					}
				}
			}
			// 暂停
			var stops = DOM.find(this.box, '.stop');
			if (stops) {
				for (var i = 0; i < stops.length; i++) {
					stops[i].onclick = function () {
						this.classList.remove('stop');
						this.classList.add('play');
						_this.startPlay = false;
						clearInterval(_this.autoPlay);
					}
				}
			}
		},
		/**
		 * 自动播放的方法
		 */
		autoPlayFun: function () {
			var _this = this;
			clearInterval(_this.autoPlay);
			//是否开始自动播放
			if (_this.startPlay) {
				_this.autoPlay = setInterval(function () {
					var interval;
					var lineIndex;
					if (_this.value < _this.maxValue) {
						if(_this.line.times && _this.line.times.length>0){
                           _this.line.timeInterval.forEach(function(timeInterval){
                           	if(timeInterval.index === _this.value){
								interval = timeInterval.interval;
							}
						   });
							_this.value = _this.value + interval;
						}else{
							_this.value = _this.value + Number(_this.line.longInterval);
						}
					} else {
						_this.value = 0;
					}
					if (_this.isRememberTime && _this.rememberValue === _this.value) {
						//不开启循环播放
						if (!_this.loopPlay) {
							var stops = DOM.find(_this.box, '.stop');
							if (stops) {
								for (var index = 0; index < stops.length; index++) {
									DOM.removeClass(stops[index], 'stop');
									DOM.addClass(stops[index], 'play');
								}
							}
							_this.startPlay = false;
							clearInterval(_this.autoPlay);
						}
					} else if(!_this.isRememberTime && _this.value === 0) {
						//不开启循环播放
						if (!_this.loopPlay) {
							var stops = DOM.find(_this.box, '.stop');
							if (stops) {
								for (var index = 0; index < stops.length; index++) {
									DOM.removeClass(stops[index], 'stop');
									DOM.addClass(stops[index], 'play');
								}
							}
							_this.startPlay = false;
							clearInterval(_this.autoPlay);
						}
					}
					//设置选择时间
					_this.setActiveTime(_this.value,false);

				}, _this.speed);
			}
		},

		/**
		 * 设置选中的时间和返回的方法
		 * @param {Object} value 当前选中的索引
		 */
		setActiveTime: function (value, first) {
			var _this = this;
			var scroolBars = DOM.find(_this.box, '.scroll-bar');
			if (scroolBars) {
				scroolBars.forEach(function (scroolBar) {
					DOM.setElementStyle(scroolBar, {
						width: String((100 / _this.maxValue) * value).concat('%'),
					});
				});
			}
			var timelineDataLis = DOM.find(_this.box, '.time-data li');
			var secletDatali = undefined;
			if (timelineDataLis) {
				timelineDataLis.forEach(function (timelineDataLi, index) {
					DOM.removeClass(timelineDataLi, 'active');
					if (index === value) {
						secletDatali = timelineDataLi;
						DOM.addClass(timelineDataLi, 'active');
					}
				})
			}
			var tooltips = DOM.find(secletDatali, '.tooltip');
			var newTime = null;
			if (tooltips) {
				newTime = tooltips[0].textContent || tooltips[0].nodeValue;
			}
			//判断首次是否执行回调
			if(!first){
				_this.timeChange(newTime, _this.updataParams);
			}
		},
		/**
		 * 补0
		 * @param {Object} val，需要补0的数值
		 */
		zeroValFun: function (val) {
			if (val < 10) {
				val = '0' + val;
			}
			return val;
		},
		/**
		 * 对象去重
		 * @param arr 被去重的对象
		 */
		removeRepeatObg: function (arr, type) {
			var result = [];
			var obj = {};
			for (var i = 0; i < arr.length; i++) {
				if (!obj[arr[i][type]]) {
					result.push(arr[i]);
					obj[arr[i][type]] = true;
				}
			}
			return result;
		},
		//初始化
		init: function (timeLineObj, updataParams) {
			this.value = 0; //当前选择时间索引
			this.partitionValue = 0; //分区时间索引
			this.maxValue = 0; //时间线上的个数
			this.allTime = []; //所有的时间
			this.autoPlay = null; //存放自动播放的方法
			this.timeType = timeLineObj.timeType; //时间轴的类型，可配的有minutes,hour,day,month
			this.isRememberTime = timeLineObj.isRememberTime || false; //是否记住播放时间
			this.rememberValue = 0; //记住当前选择时间
			//以下除了方法外都是可配置的
			this.box = DOM.getElement(timeLineObj.name); //包含时间轴的div
			this.startTime = timeLineObj.startTime; //开始时间，必填项
			this.endTime = timeLineObj.endTime; //结束时间，必填项
			this.curDate = timeLineObj.curDate; //选中时间，可配置，默认选择第一个时间，也就是开始时间
			this.partitionTime = timeLineObj.partitionTime; //分区时间
			this.timeChange = timeLineObj.change; //数据发生变化时，执行此方法
			this.updataParams = updataParams; // 时间改变要更新的参数
			this.speed = timeLineObj.speed || 3000; //播放速度，可配置，默认3000
			this.startPlay = timeLineObj.startPlay || false; //是否开始播放
			this.loopPlay = timeLineObj.loopPlay || false; //是否循环播放，默认false不循环
			if(timeLineObj.isCallBack === false){
				timeLineObj.isCallBack = 'false';
			}else{
				timeLineObj.isCallBack = 'true';
			}
			this.isCallBack = timeLineObj.isCallBack || 'true'; //是否执行回调，默认执行
			this.label = timeLineObj.label || {interval:1};
			this.line = timeLineObj.line || {longInterval:1};
			this.dateField = timeLineObj.dateField;
			this.dataSource = timeLineObj.dataSource;
			if (historyTimeLine[timeLineObj.name]) {
				clearInterval(historyTimeLine[timeLineObj.name].autoPlay);
			}
      /* 时间精度：每格代表的时间，单位随时间类型 */
      this.timeAccuracy = 1;
      if (
        !Number.isNaN(timeLineObj.timeAccuracy)
        && timeLineObj.timeAccuracy > 0
        && (timeLineObj.timeAccuracy | 0) === timeLineObj.timeAccuracy) {
        this.timeAccuracy = timeLineObj.timeAccuracy;
      } else {
        console.warn('时间精度必须为正整数（不包含0）！', timeLineObj.timeAccuracy);
      }

			this.addHtml(); //添加html内容
			this.bindEvent(); //绑定点击事件
			return this;
		}
	}
	timeLine.init = function (timeLineObj, updataParams) {
		var thisTimeline = new TimeLine().init(timeLineObj, updataParams);
		historyTimeLine[timeLineObj.name] = thisTimeline;
		return thisTimeline;
	}
})()
