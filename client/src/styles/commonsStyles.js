const color1 = 'black',
  color2 = 'white',
  color3 = '#a83279';

export const styles = {
  headExperiences: {
    background: 'silver',
    writingMode: 'vertical-rl',
    textOrientation: 'upRight',
    color: '#FFF',
    padding: '25px',
    fontWeight: 'Bold'
  },
  timeline: {
    position: 'relative',
    maxWidth: '100em',
    '&:before': {
      backgroundColor: color1,
      content: "''",
      marginLeft: '-1px',
      position: 'absolute',
      top: 0,
      width: '2px',
      height: '100%',
    },
    '& h3': {
      fontSize: '1.75em'
    },
    '& h4': {
      fontSize: '1.2em',
      marginBottom: '1.2em'
    },
  },
  timelineEvent: {
    listStyleType: 'none',
    position: 'relative',
    '&:hover': {
      '& label': {
        transform: 'rotate(-45deg)',
        backgroundColor: color3,
      },
      '& h5': {
        boxShadow: `inset 40em 0 0 0 ${color3}`,
      },
    },
  },
  timelineEventIcon: {
    transition: 'transform 0.2s ease-in',
    transform: 'rotate(45deg)',
    backgroundColor: 'black',
    outline: `10px solid ${color2}`,
    display: 'block',
    margin: '0.5em 0.5em 0.5em -0.5em',
    position: 'absolute',
    top: 0,
    width: '1em',
    height: '1em',
  },
  timelineEventThumbnail: {
    transition: '0.5s ease-in 0.1s',
    color: 'white',
    fontSize: '0.75em',
    backgroundColor: color1,
    boxShadow: 'inset 0 0 0 0em #ef795a',
    display: 'inline-block',
    marginBottom: '1.2em',
    padding: '0.25em 1em 0.2em 1em',
  },
  timelineEventCopy: {
    padding: '2em',
    position: 'relative',
    top: '-1.875em',
    left: '4em',
  },
  container: {
    boxSizing: 'border-box',
  }
};