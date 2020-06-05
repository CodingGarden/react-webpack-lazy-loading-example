import React from 'react';

// import PlayIcon from './icons/Play';
// import PauseIcon from './icons/Pause';
// import SkipIcon from './icons/Skip';

const ComponentsByName = {
  play: React.lazy(() => import(/* webpackChunkName: "PlayButton" */ './icons/Play')),
  pause: React.lazy(() => import(/* webpackChunkName: "PauseButton" */'./icons/Pause')),
  skip: React.lazy(() => import(/* webpackChunkName: "SkipButton" */ './icons/Skip')),
};

const Icon = ({ name }) => {
  const IconComponent = ComponentsByName[name];
  if (IconComponent) return (
    <React.Suspense fallback="Loading...">
      <IconComponent />
    </React.Suspense>
  )
  return <span>{name} icon not found</span>
};

export default Icon;
