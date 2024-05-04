import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from "@react-native-voice/voice";
import { useCallback, useEffect, useState } from "react";

interface IState {
  recognized: string;
  pitch: string;
  error: string;
  end: string;
  started: string;
  results: string[];
  partialResults: string[];
  isRecording: boolean;
}

export const useVoiceRecognition = () => {
  const [state, setState] = useState<IState>({
    recognized: "",
    pitch: "",
    error: "",
    end: "",
    started: "",
    results: [],
    partialResults: [],
    isRecording: false,
  });

  const resetState = useCallback(() => {
    setState({
      recognized: "",
      pitch: "",
      error: "",
      started: "",
      results: [],
      partialResults: [],
      end: "",
      isRecording: false,
    });
  }, [setState]);

  const startRecognizing = useCallback(async () => {
    resetState();
    try {
      // if you want to use English, you can use this 'en-US' locale
      await Voice.start("ja-JP");
    } catch (e) {
      console.error(e);
    }
  }, [resetState]);

  const stopRecognizing = useCallback(async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const cancelRecognizing = useCallback(async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const destroyRecognizer = useCallback(async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    Voice.onSpeechStart = (e) => {
      setState((prevState) => ({
        ...prevState,
        started: "✅",
        isRecording: true,
      }));
    }

    Voice.onSpeechRecognized = (e) => {
      setState((prev) => ({ ...prev, recognized: "✅" }));
    }

    Voice.onSpeechEnd = (e) => {
      setState((prev) => ({
        ...prev,
        end: "✅",
        isRecording: false,
      }));
    }

    Voice.onSpeechError = (e: SpeechErrorEvent) => {
      console.error(e.error);
      setState((prev) => ({
        ...prev,
        error: JSON.stringify(e.error),
        isRecording: false,
      }));
    }

    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      if(e.value) {
        setState((prev) => ({
          ...prev,
          results: e.value!,
        }));
      }
    }

    Voice.onSpeechPartialResults = (e: SpeechResultsEvent) => {
      if(e.value) {
        setState((prev) => ({
          ...prev,
          partialResults: e.value!,
        }));
      }
    }

    Voice.onSpeechVolumeChanged = (e: any) => {
      console.log(e);
      setState((prev) => ({
        ...prev,
        pitch: e.value,
      }));
    }

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }

  }
  , []);

  return {
    state,
    setState,
    resetState,
    startRecognizing,
    stopRecognizing,
    cancelRecognizing,
    destroyRecognizer,
  };
};
