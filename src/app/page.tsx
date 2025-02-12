'use client';

import Block from '@/components/ui/Block';
import Button from '@/components/ui/Button';
import Cover from '@/components/ui/Cover';
import Divider from '@/components/ui/Divider';
import Link from '@/components/ui/Link';
import '@/styles/globals.scss';
import styles from '@/styles/pages/Home.module.scss';
import { useEffect, useRef, useState } from 'react';
import { IoPencil, IoSearch } from 'react-icons/io5';

export default function Home() {
  const resizeRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  // const [dragging, setDragging] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState<string>('10rem');

  useEffect(() => {
    if (!resizeRef?.current || !sidebarRef?.current) return () => {};

    const handleMouseDown = () => {
      draggingRef.current = true;
    };

    const handleMouseUp = () => {
      draggingRef.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (draggingRef.current) {
        // @ts-ignore
        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const newWidth = e.clientX - sidebarRect.left;
        setSidebarWidth(`${newWidth - 2}px`);
      }
    };
    const resizer = resizeRef.current;

    resizer.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      resizer.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [width, setWidth] = useState<'default' | 'full'>('default');

  return (
    <div className={styles.page}>
      <div
        className={styles.sidebar}
        style={{
          width: sidebarWidth,
        }}
        ref={sidebarRef}
      >
        Sidebar
      </div>
      <div className={styles.resizer} ref={resizeRef} />
      <div className={styles.content} data-width={width}>
        <Block full className={styles.header}>
          <h3>Hello World</h3>
          <div className={styles.actions}>
            <Button icon={<IoPencil />}>Edit</Button>
            <Button variant="text" icon={<IoSearch />}>
              Search
            </Button>
            <Button variant="text">Duplicate</Button>
            <Button onClick={() => setWidth(width => (width === 'default' ? 'full' : 'default'))}>
              {width === 'default' ? 'Expand' : 'Collapse'}
            </Button>
            <Divider />
            <Link
              aria-label="Open in Notion"
              variant="text"
              href="https://www.notion.so/farisashai/doro-react-training-arc-ed16aab42d6049febf3dd70899eff0b1"
            >
              Open in Notion
            </Link>
          </div>
        </Block>
        <Cover src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" />
        <Block className="clickable">Content</Block>
        <Block className="clickable">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nihil architecto ratione
          odit ipsam? Tempore rerum nam, tenetur dolores porro magni facere numquam sapiente optio
          quos obcaecati corrupti maiores harum. Velit incidunt minima delectus ratione architecto
          provident dicta necessitatibus accusamus, aperiam voluptatibus, itaque unde. Itaque,
          consequatur sapiente maxime minus excepturi esse unde adipisci architecto dicta. Quaerat
          aperiam itaque tenetur dolore! Cum ea nesciunt unde ut? Autem sit molestiae facilis beatae
          nostrum, harum totam cupiditate optio facere dolores esse dignissimos. Ex repudiandae
          saepe, dolor eum nesciunt est minus facere doloribus. Ad! Ex cum laudantium, eius a
          repellendus est, omnis voluptatem harum iusto ad veritatis deserunt fuga voluptas! Illum,
          obcaecati, cumque optio assumenda repellendus odio fuga distinctio natus dolorum quia
          dignissimos? Dignissimos.
        </Block>
        <Block>Content</Block>
        <Block>Content</Block>
      </div>
    </div>
  );
}
