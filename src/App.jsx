import { useCallback, useEffect, useState } from "react";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { createContext } from "react";

export let LoadingContext = createContext(false);

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [pageReady, setPageReady] = useState(false);
  const [isLoadingScreenComplete, setIsLoadingScreenComplete] = useState(false);
  const reportLoadProgress = useCallback(
    (progress) => setLoadingProgress(progress),
    [],
  );
  const markPageReady = useCallback(() => setPageReady(true), []);
  const finishLoading = useCallback(() => setIsLoadingScreenComplete(true), []);

  return (
    <>
      {!isLoadingScreenComplete && (
        <LoadingScreen
          progress={loadingProgress}
          isReady={pageReady}
          onComplete={finishLoading}
        />
      )}

      <LoadingContext.Provider value={isLoadingScreenComplete}>
        <Home onLoadProgress={reportLoadProgress} onReady={markPageReady} />
      </LoadingContext.Provider>
    </>
  );
}

export default App;
