import React from "react";
import styles from "./FlowConversation.module.scss";

const FLowConversation = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.inside_container}>
        <div>
          <h3>Flow Conversations</h3>
          <div className={styles.para_container}>
            <p>
              Generate meaningful discussions with your audience strong, loyal
              community.Think of the insightful conversations you miss out on
              with a feedback form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FLowConversation;
