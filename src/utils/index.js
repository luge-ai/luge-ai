export const setRem = () => {
    const baseSize = 100;
    const baseWidth = 1440;
    const screenWidth = document.documentElement.clientWidth || 1440;
    const rem = Math.floor(screenWidth / baseWidth * baseSize);
    document.documentElement.style.fontSize = `${rem}px`;
};

export const parseUrl = url => {
    if (!url) {
        return {};
    }
    let params = decodeURIComponent(url).split('?')[1];
    if (!params || !params.length) {
        return {};
    }
    params = params.split('&');
    let bornParams = {};
    for (let itemKey in params) {
        const tmp = params[itemKey].split('=');
        bornParams[tmp[0]] = tmp[1];
    }
    return bornParams;
};

// 1596211200

export const formatDate = (newDate, type) => {
    let date = new Date(+newDate);
    let YY = date.getFullYear() ;
    let MM =  '.' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let DD = '.' + (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    // let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    // let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    // let ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return type ? YY + MM : YY + MM + DD;
  };