import { App } from "./app";

export interface AppConfig {
  port: number;
}

const config: AppConfig = {
  port: +(process.env.PORT || 3003),
};

const app = App();

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
