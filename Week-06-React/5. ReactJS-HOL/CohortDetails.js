import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const titleStyle = {
    color: cohort.currentStatus === 'Ongoing' ? 'green' : 'blue',
    fontWeight: 'bold'
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>
        {cohort.cohortCode} - {cohort.technology}
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coachName}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
