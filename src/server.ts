import App from "./app";

App.createApp()
  .getApp()
  .listen(5000, () => {
    console.log("App started succesffull...");
  });
