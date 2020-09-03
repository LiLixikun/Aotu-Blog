class HttpException extends Error {
  msg: string;
  code: number;
  errorCode: number;
  data: any;

  constructor(
    msg: string = "服务器异常",
    errorCode: number = 500,
    code: number = 400
  ) {
    super();
    /**
     * 错误信息
     */
    this.msg = msg;
    /**
     * Http 状态码
     */
    this.code = code;
    /**
     * 自定义的异常状态码
     */
    this.errorCode = errorCode;
  }
}

class ParameterException extends HttpException {
  constructor(msg: string, errorCode: number) {
    super();
    this.code = 400;
    this.msg = msg || "参数错误";
    this.errorCode = errorCode || 400;
  }
}

class AuthFaild extends HttpException {
  constructor(msg: string) {
    super();
    this.code = 401;
    this.msg = msg || "认证失败";
    this.errorCode = 401;
  }
}

class ForBiden extends HttpException {
  constructor(msg: string, errorCode: number) {
    super();
    this.code = 403;
    this.msg = msg || "禁止访问";
    this.errorCode = errorCode || 1006;
  }
}
class Success extends HttpException {
  constructor(data: any, msg: string) {
    super();
    this.code = 200;
    this.data = data;
    this.msg = msg || "成功";
    this.errorCode = 200;
  }
}

class Faild extends HttpException {
  constructor(msg: string, errorCode: number) {
    super();
    this.code = 400;
    this.msg = msg || "操作失败";
    this.errorCode = errorCode || -200;
  }
}

class NotFound extends HttpException {
  constructor(msg: string, errorCode: number) {
    super();
    this.code = 404;
    this.msg = msg || "资源未找到";
    this.errorCode = errorCode || 10000;
  }
}

export {
  HttpException,
  ParameterException,
  ForBiden,
  AuthFaild,
  Success,
  Faild,
  NotFound,
};
