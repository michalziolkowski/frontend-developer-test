// tslint:disable:no-console

const log = (name: string, message: string | any) => {
  if (process.env.NODE_ENV === "development") {
    if (typeof message === "string") {
      console.log(`${name}: ${message}`);
    } else {
      console.log(`${name}:`);
      console.log(message);
    }
  }
};

export default { log };
