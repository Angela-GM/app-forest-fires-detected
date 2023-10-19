import { useRouteError } from "react-router-dom";
interface RouterError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (error) {
    if (
      typeof error === "object" &&
      "statusText" in error &&
      "message" in error
    ) {
      const routerError = error as RouterError;

      return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{routerError.statusText || routerError.message}</i>
          </p>
        </div>
      );
    } else {
      return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>Unknown error</i>
          </p>
        </div>
      );
    }
  } else {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>No error data available</i>
        </p>
      </div>
    );
  }
}
