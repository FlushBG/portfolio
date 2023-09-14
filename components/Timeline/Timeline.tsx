import Image from 'next/image';
import { m } from 'framer-motion';
import TimelineCard from './TimelineCard';
import TimelineDate from './TimelineDate';
import classes from './Timeline.module.scss';
import useScreenSizeDetection from '@/hooks/useScreenSizeDetection';

export enum GridPosition {
  Left = 'left',
  Right = 'right',
}

const TEST_DATA = [{ position: GridPosition.Left }, { position: GridPosition.Right }];

type TimelineProps = {
  items?: any[];
};

const Timeline = ({ items = [] }: TimelineProps) => {
  const { isMobile } = useScreenSizeDetection();

  const renderLeftSide = (position: GridPosition) => {
    if (isMobile) return null;
    return position === GridPosition.Left ? <TimelineCard position={position} /> : <TimelineDate position={position} />;
  };

  const renderRightSide = (position: GridPosition) => {
    if (isMobile) return <TimelineCard position={GridPosition.Right} />;
    return position === GridPosition.Left ? <TimelineDate position={position} /> : <TimelineCard position={position} />;
  };

  return (
    <div className={classes.timeline}>
      {TEST_DATA.map((item) => (
        <div key={item.position} className={classes.item}>
          {renderLeftSide(item.position)}
          <m.div
            initial={{ scale: 0.25 }}
            whileInView={{ scale: [0.25, 1.4, 1] }}
            transition={{ duration: 0.75, type: 'spring' }}
            viewport={{ once: true }}
            className={classes.icon}
          >
            <div>
              <Image src='/icons/accedia.ico' alt='Accedia' fill />
            </div>
          </m.div>
          {renderRightSide(item.position)}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
