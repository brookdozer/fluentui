import { fluentDesignSystemProvider } from '../design-system-provider';
import PresenceBadgeStoryTemplate from './fixtures/presence-badge.html';
import { FluentPresenceBadge } from '.';

// Prevent tree-shaking
FluentPresenceBadge;
fluentDesignSystemProvider;

export default {
  title: 'Presence Badge',
};

export const PresenceBadge = (): string => PresenceBadgeStoryTemplate;
