// lang/ur.js
module.exports = {
  // General
  newVersionDetected: "آپ %1 ورژن استعمال کر رہے ہیں، تازہ ترین ورژن %2 ہے۔ برائے مہربانی بہتر کارکردگی کے لیے اپ ڈیٹ کریں۔",
  errorFormat: "غلط ماڈیول!",
  nameExist: "ماڈیول کا نام پہلے سے موجود ماڈیول سے ملتا ہے!",
  notFoundLanguage: "ماڈیول %1 آپ کی زبان کو سپورٹ نہیں کرتا",
  notFoundPackage: "پیکیج %1 ماڈیول %2 کے لیے نہیں ملا، انسٹال کر رہا ہوں...",
  cantInstallPackage: "پیکیج %1 انسٹال نہیں ہو سکا ماڈیول %2 کے لیے، غلطی: %3",
  loadedPackage: "پیکیج کامیابی سے انسٹال ہو گیا ماڈیول %1 کے لیے",
  loadedConfig: "کنفیگریشن کامیابی سے انسٹال ہو گئی ماڈیول %1 کے لیے",
  cantLoadConfig: "ماڈیول %1 کی کنفیگریشن انسٹال نہیں ہو سکی، غلطی: %2",
  cantOnload: "ماڈیول %1 سیٹ اپ شروع نہیں کر سکا، غلطی: %1",
  successLoadModule: "ماڈیول %1 کامیابی سے انسٹال ہو گیا",
  failLoadModule: "ماڈیول %1 انسٹال نہیں ہو سکا، غلطی: %2",
  finishLoadModule: "ماڈیول کے %1 کمانڈز اور %2 ایونٹس کامیابی سے انسٹال ہو گئے",
  foundPathAppstate: "اپ اسٹیٹ فائل ملی، اب لاگ ان ہو رہا ہے...",
  notFoundPathAppstate: "غلطی! اپ اسٹیٹ فائل نہیں ملی یا خراب ہے!",
  checkListGban: "گلوبل بین لسٹ چیک کر رہا ہے...",
  banDevice: "آپ کے ڈیوائس کو پرینشن پروجیکٹ سے بین کر دیا گیا ہے، مزید معلومات کے لیے فیس بک سے رابطہ کریں: https://fb.me/Priyanshu.Rajput.official",
  keyNotSameFormat: "غلط فارمیٹ، کوڈ میں 6 عدد ہونا لازمی ہے۔",
  codeInputExpired: "آپ کا کوڈ غلط یا ختم شدہ ہے۔",
  unbanDeviceSuccess: "آپ کا ڈیوائس اب ان بین ہو گیا ہے، دوبارہ اسٹارٹ کریں۔",
  userBanned: "آپ کو پرینشن پروجیکٹ سے بین کر دیا گیا ہے، وجہ: %2۔ مزید معلومات کے لیے فیس بک پر رابطہ کریں!",
  finishCheckListGban: "گلوبل بین لسٹ چیک مکمل ہو گیا",
  handleListenError: "listen میں غیر متوقع غلطی، غلطی: %1",
  warningSourceCode: "انتباہ! سورس کوڈ میں تبدیلی کی گئی ہے، اب بند کریں!",
  refreshListen: "handleListener ریفریش ہو گیا...",
  successConnectDatabase: "ڈیٹا بیس سے کامیابی سے جڑ گیا!",
  failConnectDatabase: "ڈیٹا بیس سے جڑنے میں ناکام، غلطی: %1",

  // Command handling
  commandNotExist: "یہ کمانڈ موجود نہیں ہے: %1",
  commandError: "کمانڈ %1 چلانے میں غلطی: %2",
  permssionNotEnough: "یہ کمانڈ صرف مالک یا ایڈمن کے لیے ہے! (%1)",
  commandThreadBanned: "یہ تھریڈ '%1' کمانڈ استعمال نہیں کر سکتا",
  commandUserBanned: "آپ '%1' کمانڈ استعمال نہیں کر سکتے",

  // Cooldown / Usage
  waitCooldown: "براہ کرم %1 سیکنڈ انتظار کریں، یہ کمانڈ دوبارہ استعمال کرنے سے پہلے!",

  // Events
  executeEvent: "ایونٹ چلا: %2 تھریڈ: %3 | پروسیسنگ وقت: %4ms",
  eventError: "ایونٹ %1 چلانے میں غلطی: %2",

  // Reactions
  missingValue: "آپ کی درخواست کا جواب دینے کے لیے معلومات نہیں ملی",
  executeError: "جواب دینے میں غلطی: %1",

  // Replies
  handleReplyMissingValue: "جواب دینے کے لیے ضروری معلومات نہیں ملی",
  handleReplyExecuteError: "جواب دینے میں غلطی: %1",

  // Schedule
  handleScheduleExecuteError: "شیڈول %1 ماڈیول میں غلطی: %2",

  // Utils
  utilsThrowError: "یہ کمانڈ کام نہیں کر رہی، براہ کرم دوسرا کمانڈ استعمال کریں: %1help %2"
};