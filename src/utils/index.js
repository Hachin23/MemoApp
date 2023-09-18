import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年m月d日 HH時mm分');
}

//export default と export(defaultなし)の違い
// 参照url https://zenn.dev/seetsuko/articles/f378bf513d6231
