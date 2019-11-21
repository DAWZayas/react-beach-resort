import services from "../fake-data/services";

type JSONResponse<T> = {
  json: () => Promise<T>;
};

const jsonRensonse = <T>(data: T): JSONResponse<T> => ({
  json: () => Promise.resolve(data)
});

const mockFetch = <T>(url: string): Promise<JSONResponse<T>> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case "/services": {
          // @ts-ignore
          return resolve(jsonRensonse(services));
        }
        default: {
          reject("Invalid end point");
        }
      }
    }, 5000);
  });

export default mockFetch;
