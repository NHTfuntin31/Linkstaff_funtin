const listOption = (start: number, end: number) => {
    const options = [];
    for (let i = start; i <= end; i++) {
        options.push(i);
    }
    return options;
};
const getSpecialDay = (year: string | number, month: string | number) => {
    const month30 = [4, 6, 9, 11];
    if (Number(year) % 4 === 0 && Number(month) == 2) {
        return listOption(1, 29);
    } else if (Number(year) % 4 !== 0 && Number(month) == 2) {
        return listOption(1, 28);
    } else if (month30.includes(Number(month))) {
        return listOption(1, 30);
    } else {
        return listOption(1, 31);
    }
};

const getAreaInEnglish = (value: string) => {
    if (value == '大阪') {
        return 'osaka';
    } else if (value == '北海道') {
        return 'hokkaido';
    } else if (value == '宮城') {
        return 'miyagi';
    } else if (value == '群馬') {
        return 'gunma';
    } else if (value == '埼玉') {
        return 'saitama';
    } else if (value == '千葉') {
        return 'chiba';
    } else if (value == '東京') {
        return 'tokyo';
    } else if (value == '神奈川') {
        return 'kanagawa';
    } else if (value == '新潟') {
        return 'nigata';
    } else if (value == '石川') {
        return 'ishikawa';
    } else if (value == '静岡') {
        return 'shizuoka';
    } else if (value == '愛知') {
        return 'aichi';
    } else if (value == '京都') {
        return 'kyoto';
    } else if (value == '兵庫') {
        return 'hyogo';
    } else {
        return value;
    }
}

const getAreaInJapanese = (value: string) => {
    if (value == 'osaka') {
        return '大阪';
    } else if (value == 'hokkaido') {
        return '北海道';
    } else if (value == 'miyagi') {
        return '宮城';
    } else if (value == 'gunma') {
        return '群馬';
    } else if (value == 'saitama') {
        return '埼玉';
    } else if (value == 'chiba') {
        return '千葉';
    } else if (value == 'tokyo') {
        return '東京';
    } else if (value == 'kanagawa') {
        return '神奈川';
    } else if (value == 'nigata') {
        return '新潟';
    } else if (value == 'ishikawa') {
        return '石川';
    } else if (value == 'shizuoka') {
        return '静岡';
    } else if (value == 'aichi') {
        return '愛知';
    } else if (value == 'kyoto') {
        return '京都';
    } else if (value == 'hyogo') {
        return '兵庫';
    } else {
        return value;
    }
}

const getQueryString= (arrJobView: Array<string|number>|undefined) => {
    const newArr: Array<string> = [];
    let newArrToString = '';
    return new Promise((resolve) => {
        if (arrJobView && arrJobView.length) {
            arrJobView.map((item: string|number, index: number) => {
                if (!newArr.includes(`filters[id][$in][${index}]=${item}`)) {
                    newArr.push(`filters[id][$in][${index}]=${item}`);
                }
            })
            newArrToString = newArr.join('&');
            resolve(newArrToString)
        } else {
            resolve(newArrToString)
        }
    });
}

export {listOption, getSpecialDay, getAreaInEnglish, getAreaInJapanese, getQueryString}