import { useState, useEffect, useCallback } from 'react';

export interface BookmarkedPrayer {
  id: string;
  date: string;
  timeOfDay: 'morning' | 'midday' | 'evening';
  call: string;
  scripture: {
    text: string;
    reference: string;
  };
  reflection: string;
  prompts: string[];
  benediction: string;
  bookmarkedAt: string;
}

const BOOKMARKS_KEY = 'daily-prayer-bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkedPrayer[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored));
      } catch {
        setBookmarks([]);
      }
    }
  }, []);

  const saveBookmarks = useCallback((newBookmarks: BookmarkedPrayer[]) => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
    setBookmarks(newBookmarks);
  }, []);

  const addBookmark = useCallback((prayer: Omit<BookmarkedPrayer, 'id' | 'bookmarkedAt'>) => {
    const id = `${prayer.date}-${prayer.timeOfDay}`;
    const exists = bookmarks.some(b => b.id === id);
    if (exists) return false;

    const newBookmark: BookmarkedPrayer = {
      ...prayer,
      id,
      bookmarkedAt: new Date().toISOString(),
    };
    saveBookmarks([newBookmark, ...bookmarks]);
    return true;
  }, [bookmarks, saveBookmarks]);

  const removeBookmark = useCallback((id: string) => {
    saveBookmarks(bookmarks.filter(b => b.id !== id));
  }, [bookmarks, saveBookmarks]);

  const isBookmarked = useCallback((date: string, timeOfDay: string) => {
    return bookmarks.some(b => b.id === `${date}-${timeOfDay}`);
  }, [bookmarks]);

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };
}
