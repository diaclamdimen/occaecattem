interface PlayOptions {
  action: string;
}

function play(options: PlayOptions): string {
  switch (options.action) {
    case 'start':
      return 'Game started!';
    case 'stop':
      return 'Game stopped!';
    default:
      return 'Invalid action!';
  }
}
