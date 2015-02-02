angular.module('googleTranslateModule', [])

.factory('Translate', function($http){

  var languageDict = {
    english: 'en',
    chinese: 'zh-CN',
    spanish: 'es',
    french: 'fr',
    italian: 'it'
  };

  var translateMsg = function(msg, targetLang, sourceLang){
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/language/translate/v2',
      params: {
        key: 'AIzaSyBC5v0BqpuJz6g3roho0JUkwzAX0PoR2Dk',
        target: languageDict[targetLang],
        // source: languageDict[sourceLang],
        q: msg
      }
    })
    .then(function(res){
      return res.data;
    })
  }

  return {
    translateMsg: translateMsg
  };
})