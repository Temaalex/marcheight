import { Routes, Route } from 'react-router-dom';
import Error from "./components/ContentError";

import QuizVar from './components/QuizVar';

import QuizBoss from './components/QuizBoss';
import QuizText from './components/QuizText';
import TheEnd from './components/TheEnd';
import ToBoss from './components/toBoss'
import ErrorBoss from './components/ContentErrorToBoss'


function App() {
  return (
    <Routes>
     
      {/* Ошибка в ответе */}
      <Route path="/0" element={<Error/>} />
      {/* все кроме */}
      <Route path="*" element={<h1>404 Not Found</h1>} />

{/* Все задачи по карте */}
<Route path="/2IpUegU1Fn/1" element={<QuizText/>} />
<Route path="/RmDHX2qN91/2" element={<QuizText/>} />
<Route path="/eIlkDwyKxe/3" element={<QuizVar/>} />
<Route path="/IBtRh8bbAp/4" element={<QuizText/>} />
<Route path="/4EA2gBL7PY/5" element={<QuizText/>} />
<Route path="/BgBsDlYT1W/6" element={<QuizVar/>} />
<Route path="/4vFyXmQRHN/7" element={<QuizText/>} />
<Route path="/g2WscFdKmU/8" element={<QuizText/>} />
<Route path="/IKE9CuyJpo/9" element={<QuizVar/>} />
<Route path="/R0ybX6JfSG/10" element={<QuizText/>} />
<Route path="/i1NLimzSqs/11" element={<QuizText/>} />
<Route path="/A3oNvbAGNt/12" element={<QuizText/>} />
<Route path="/bevMtqFrP9/13" element={<QuizText/>} />
<Route path="/KKJumITqCl/14" element={<QuizText/>} />
<Route path="/Y42lCSG8qO/15" element={<QuizVar/>} />
<Route path="/yWf3O9Iexk/16" element={<QuizText/>} />
<Route path="/8muR0Hizd3/17" element={<QuizText/>} />
<Route path="/rPRIaeLrqL/18" element={<QuizVar/>} />
<Route path="/MRGTs4dIKm/19" element={<QuizText/>} />
<Route path="/HQ1jfOOQZm/20" element={<QuizText/>} />
<Route path="/4SHKJwYH0o/21" element={<QuizVar/>} />
<Route path="/ZxcjyQ5wOv/22" element={<QuizText/>} />
<Route path="/U28LOk4IXx/23" element={<QuizText/>} />
<Route path="/UgTvE354sZ/24" element={<QuizVar/>} />
<Route path="/ZNySCxol7H/25" element={<QuizText/>} />
<Route path="/demv0cS4Ta/26" element={<QuizText/>} />
<Route path="/8oZqLpWocI/27" element={<QuizText/>} />
<Route path="/30h6xlQkRG/28" element={<QuizText/>} />
<Route path="/H5yhWTrtud/29" element={<QuizText/>} />
<Route path="/mk6BvKQSoB/30" element={<QuizVar/>} />

{/* Ссылка на босса */}
<Route path="/toBoss" element={<ToBoss/>} />
<Route path="/ErrorBoss" element={<ErrorBoss/>} />
{/* Босс */}
<Route path="/aL43Ah0l0z/32" element={<QuizBoss/>} />
{/* Финиш */}
<Route path="/TheEnd" element={<TheEnd/>} />
    </Routes>
  );
}

export default App;
