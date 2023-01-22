import type { FC, MouseEventHandler } from 'react';
import { useCallback, useState } from 'react';

const styles = [
  {
    image: "/images/mario.jpg",
    bg: "#ff0000",
  },
  {
    image: "/images/daisy.jpg",
    bg: "#fe9900",
  },
  {
    image: "/images/yoshi.jpg",
    bg: "#00cc66",
  },
  {
    image: "/images/peach.jpg",
    bg: "#ff6699",
  },
]

const Score: FC<{idx: number}> = ({ idx }) => {
  const [score, setScore] = useState(0);

  const onClick = useCallback(() => setScore(s => s + 1), [setScore]);
  const onRightClick: MouseEventHandler<HTMLDivElement> = useCallback(event => {
    setScore(s => s - 1);
    event.preventDefault();
  }, [setScore]);

  return (
    <div
      className="h-1/4 text-right flex"
      style={{ backgroundColor: styles[idx].bg }}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      <img src={styles[idx].image} className="h-full" />
      <p className="align-right text-white ml-8 mr-8 w-32" style={{ fontSize: 112 }}>
        {score}
      </p>
    </div>
  );
}

const Quiz: FC = () => {
  return (
    <div className="absolute top-0 right-0 h-full select-none">
      <Score idx={0} />
      <Score idx={1} />
      <Score idx={2} />
      <Score idx={3} />
    </div>
  );
};

export default Quiz;
