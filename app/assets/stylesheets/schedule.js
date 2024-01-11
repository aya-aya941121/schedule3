 // Moment.jsをインポートする
 const moment = require('moment');
 // Moment.jsのタイムゾーンを設定する
 moment.locale('ja');
 moment.tz.setDefault('Asia/Tokyo');

 // 現在の日付と時刻を取得する
 const now = moment();
 // JSTでフォーマットされた日付と時刻を取得する
 const formattedDate = now.format('YYYY年MM月DD日');
 const formattedTime = now.format('HH:mm');

 console.log(`現在の日付：${formattedDate}`);
 console.log(`現在の時刻：${formattedTime}`);