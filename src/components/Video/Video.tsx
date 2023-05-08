import styles from "./video.module.scss";

export type VideoProps = {
  title: string;
  videoId: string;
};

export const Video = ({ title, videoId }: VideoProps): JSX.Element => {
  return (
    <iframe
      className={styles.iframe}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};
