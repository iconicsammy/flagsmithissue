import flagsmith from 'react-native-flagsmith';
import AsyncStorage from '@react-native-community/async-storage';

const handleFlagsError = e => {
  console.log(e);
};

flagsmith
  .init({
    environmentID: 'Qqzb8wpxz7YmT34rZHyFw7',
    api: 'https://flagsapi.oneacrefund.org/api/v1/',
    asyncStorage: AsyncStorage,
    cacheFlags: true,
    onError: handleFlagsError,
    onChange: (oldFlags, params) => {}
  })
  .then(() => {
    flagsmith.startListening(30000);
  })
  .catch((error) => {
    handleFlagsError(error);
  });

 const initializeFlagSmith = () => {
//   flagsmith
//     .init({
//       environmentID: 'envid',
//       api: 'url',
//       asyncStorage: AsyncStorage,
//       cacheFlags: false,
//       onError: handleFlagsError,
//       onChange: (oldFlags, params) => {},
//     })
//     .then(() => {
//       flagsmith.startListening(30000);
//       return true;
//     })
//     .catch(error => {
//       handleFlagsError(error);
//       return false;
//     });
 console.log('initilia called');
 };

const FlagsmithConfigurations = {
  initializeFlagSmith,
};
export default FlagsmithConfigurations;
