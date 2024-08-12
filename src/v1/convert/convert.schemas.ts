export const SuccessfulSchema = { description: 'PDF File' }

export const BadRequestSchema = {
  schema: {
    oneOf: [
      { title: 'message', type: 'array' },
      { title: 'error', type: 'string' },
      { title: 'statusCode', type: 'number' },
    ],
    required: ['message', 'statusCode'],
    example: {
      message: [
        "file must be a string"
      ],
      error: "Bad Request",
      statusCode: 400
    }
  },
  description: '["file should not be empty", "file must be a string"]'
}

export const InternalServerErrorSchema = {
  schema: {
    oneOf: [
      { title: 'message', type: 'string' },
      { title: 'error', type: 'string' },
      { title: 'statusCode', type: 'number' },
    ],
    required: ['message', 'statusCode'],
    example: {
      "message": "An unexpected error occurred while requesting",
      "error": "error message",
      "statusCode": 500
    }
  },
  description: 'An unexpected error occurred while requesting'
}
