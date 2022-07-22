import { ERROR_MESSAGE } from 'constants/errorApi'
import { ErrorApi } from 'types/errorApi'

export const errorApi = (e: ErrorApi): string => {
  const errorCode = e.response?.status

  if (errorCode === undefined) return ERROR_MESSAGE.GENERIC_ERROR
  if (errorCode >= 500) return ERROR_MESSAGE.ERROR_500
  if (errorCode === 403) return ERROR_MESSAGE.ERROR_403
  if (errorCode >= 400) return ERROR_MESSAGE.ERROR_400
  return ERROR_MESSAGE.GENERIC_ERROR
}
