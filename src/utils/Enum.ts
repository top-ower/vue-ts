/**
 * 枚举类
*/
export class Enum {
  /**
   * 添加枚举字段
   * field: 枚举字段
   * label: 界面显示
   * value: 枚举值
   */
  add (field: string, label: string, value: string | number): any {
    this[field] = { label, value }
    return this
  }

  /**
   * 根据枚举value获取其label
   */
  getLabelByValue (value: string | number): string {
    // 字段不存在返回‘’
    if (value === undefined || value === null) {
      return ''
    }
    for (let i in this) {
      let e: any = this[i]
      if (e && e.value === value) {
        return e.label
      }
    }
    return ''
  }
}