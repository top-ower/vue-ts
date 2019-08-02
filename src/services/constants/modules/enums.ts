import { Enum } from '@/utils/Enum'

/*
* key 唯一值
* label 显示的值
* value 枚举值(对应后台存储的值)
*/
export default {
	productTypes: new Enum().add('yb', '逆变器', 0).add('zndb', '智能电表', 1).add('gfhjjcy', '光伏环境检测仪', 2).add('dzs', '电子锁', 3).add('sdj', '扫地机', 4).add('hlx', '汇流箱', 5).add('qqk', '亲情卡', 6),
	lineTypes: new Enum().add('wifi', 'Wi-Fi', '1').add('2g', '2G', '2').add('3g', '3G', '3').add('4g', '4G', '4').add('nb', 'NB', '5').add('zigBee', 'ZigBee', '6').add('ly', '蓝牙', '7'),
}