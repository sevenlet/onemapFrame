/**
 * 图层管理对象
 * @file
 */

function LayerControl() {
  this.layersConfig = []; // 树结构的图层配置
  this.layersConfigObj = {}; // key-value 结构的图层配置

  /**
   * 添加多个图层
   * @param {Object[]} layers 要添加的图层配置（树结构）
   * @param {Function} oneLoaded 单个图层添加完成的回调
   * @param {Function} allLoaded 全部图层添加完成的回调
   * @param {Function} oneError 单个图层添加失败的回调
   */
  this.addLayers = addLayers;
}
