export class AppError extends Error {}

export class NoPortImplemented extends AppError {
  constructor() {
    super('Can not read port from enviroment variables, please add PORT to .env file')
  }
}

export class NoDriverConverterImplemented extends AppError {
  constructor() {
    super(
      'Can not read driver converter from enviroment variables, '
      + 'please add DRIVER_CONVERTER to .env file'
    )
  }
}
