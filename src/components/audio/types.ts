export interface AudioPlayerProps {
  audioUrl: string;
}

export interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export interface AudioIconProps {
  className?: string;
}

export interface VoiceWaveProps {
  isPlaying: boolean;
}