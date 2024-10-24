// Consulta API da NASA informando sempre o dia anterior

// Função para obter a data anterior no formato YYYY-MM-DD
function getDataOntem() {

    var hoje = new Date();
    var ontem = new Date();
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    ontem.setTime(hoje.getTime() - umDiaEmMilissegundos);
    myDate = ontem.getFullYear() + "-" + (ontem.getMonth()+1) + "-" + ontem.getDate();
    return myDate;
  
  }
  
  // URL base da API com as variáveis para substituição
  var obj = JSON.parse(value);
  var API_KEY = obj.API_KEY;
  const urlBase = 'https://api.nasa.gov/neo/rest/v1/feed?start_date={start_date}&end_date={end_date}&api_key={api_key}';
  
  // Substituindo as variáveis pela data atual e chave de API
  const urlCompleta = urlBase
    .replace('{start_date}', getDataAtual())
    .replace('{end_date}', getDataAtual())
    .replace('{api_key}', API_KEY);
  
  // Fazendo a requisição à API usando fetch
  //return urlCompleta; 
  
  var request = new HttpRequest();
  return request.get(urlCompleta);
