javascript:(function(){
  let query = prompt('Enter search query:');
  let today = new Date();
  let priorDate = new Date(today);
  priorDate.setDate(today.getDate() - 2);
  let priorDateStr = (priorDate.getMonth() + 1) + '/' + priorDate.getDate() + '/' + priorDate.getFullYear();
  
  let url = 'https://www.google.com/search?q=' + encodeURIComponent(query) + '&source=hp&tbs=cdr:1,cd_min:1/1/1900,cd_max:' + priorDateStr;
  
  window.open(url, '_blank');
})();
