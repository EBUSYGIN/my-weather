export const weatherCodeToImage = {
  // Ясно / Солнечно
  1000: '/sunny.png',

  // Облачность
  1003: '/partly-cloudy.png',
  1006: '/cloudy.png',
  1009: '/cloudy.png',

  // Атмосферные явления
  1030: '/mist.png',
  1135: '/mist.png',
  1147: '/mist.png',
  1114: '/wind-snow.png',
  1117: '/wind-snow.png',

  // Осадки: дождь
  1063: '/rainy.png',
  1180: '/rainy.png',
  1183: '/rainy.png',
  1186: '/rainy.png',
  1189: '/rainy.png',
  1192: '/heavy-rain.png',
  1195: '/heavy-rain.png',
  1150: '/drizzle.png',
  1153: '/drizzle.png',

  // Осадки: снег
  1066: '/snow.png',
  1210: '/snow.png',
  1213: '/snow.png',
  1216: '/snow.png',
  1219: '/snow.png',
  1222: '/heavy-snow.png',
  1225: '/heavy-snow.png',
  1255: '/snow.png',
  1258: '/heavy-snow.png',

  // Смешанные осадки
  1069: '/sleet.png',
  1204: '/sleet.png',
  1207: '/sleet.png',
  1249: '/sleet.png',
  1252: '/sleet.png',

  // Замерзающие осадки
  1072: '/sleet.png',
  1168: '/sleet.png',
  1171: '/sleet.png',
  1198: '/sleet.png',
  1201: '/sleet.png',

  // Ледяной дождь
  1237: '/sleet.png',
  1261: '/sleet.png',
  1264: '/sleet.png',

  // Ливни
  1240: '/heavy-snow.png',
  1243: '/heavy-snow.png',
  1246: '/heavy-snow.png',

  // Грозы
  1087: '/thunderstorm.png',
  1273: '/thunderstorm.png',
  1276: '/thunderstorm.png',
  1279: '/thunderstorm-snow.png',
  1282: '/thunderstorm-snow.png',
};

export type ImageCodes = keyof typeof weatherCodeToImage;
