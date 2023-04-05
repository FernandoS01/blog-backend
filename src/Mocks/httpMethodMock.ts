import { Request, Response } from 'express';

const mockRequest = (): Request<any> => {
  const req = {} as Request<any>;
  req.body = jest.fn().mockReturnValue(req);
  req.params = jest.fn().mockReturnValue(req);
  return req;
};

const mockResponse = (): Response<any> => {
  const res = {} as Response<any>;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

export { mockRequest, mockResponse}