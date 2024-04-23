import React, {useState, createContext} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TrackerListContext = createContext();

export const TrackerListProvider = (props) => {
    const [trackers, setTrackers] = useState([]);
    function addTracker(hero) {
        setTrackers([...trackers, {
          key: uuidv4(),
          id: uuidv4(),
          hero: hero,
        }]);
      }
      function removeTracker(id) {
        setTrackers(trackers.filter(tracker => tracker.id !== id));
      }
    return <TrackerListContext.Provider value={[trackers, setTrackers, addTracker, removeTracker]}>{props.children}</TrackerListContext.Provider>;
};