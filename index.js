/**
 * Customizely Handle Unhandled error in cli.
 *
 */
import handleError from 'error-handle-cli';

export default function () {
  process.on('unhandledRejection', (err) => {
    handleError(`UNHANDLED ERROR`, err);
  });
}
