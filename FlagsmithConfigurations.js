import flagsmith from 'react-native-flagsmith';
import AsyncStorage from '@react-native-community/async-storage';

const handleFlagsError = e => {
  console.log(e);
};

const initializeFlagSmith = () => {
  flagsmith
    .init({
      environmentID: 'Qqzb8wpxz7YmT34rZHyFw7',
      api: 'https://flagsapi.oneacrefund.org/api/v1/',
      AsyncStorage: AsyncStorage,
      cacheFlags: true,
      onError: handleFlagsError,
      onChange: (oldFlags, params) => {
        alert(JSON.stringify(flagsmith.flags));
      },
    })
    .then(() => {
      flagsmith.startListening(30000);
    })
    .catch(error => {
      handleFlagsError(error);
    });
};

const FlagsmithConfigurations = {
  initializeFlagSmith,
};

export default FlagsmithConfigurations;
