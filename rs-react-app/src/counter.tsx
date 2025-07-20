import styles from './Counter.module.css';

interface CounterProps {
  initialCount?: number;
  buttonText?: string;
}

export class Counter extends React.Component<{}, { count: number }> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount || 0
    };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div className={styles.counterContainer}>
        <button
          className={styles.counterButton}
          onClick={this.increment}
        >
          {this.props.buttonText || 'Count is'} {this.state.count}
        </button>
      </div>
    );
  }
}
