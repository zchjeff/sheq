var ss = sessionStorage;

var globalConst = {
    login: {
        userName: 'loginUserName'
    }
};

function checkLogin() {
    return true;
    if (ss.getItem(globalConst.login.userName)) {
        // 登录成功
        return true;
    } else {
        return false;
    }
}

function loginSuc(userName) {
    ss.setItem(globalConst.login.userName, userName);
}