"use client";

import {
  type CSSProperties,
  type ReactNode,
  useId,
  useState,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { easePremium } from "@/lib/motion";

export type NotchPosition = "top" | "bottom";

export type NotchItemData = {
  id: string;
  label: string;
  icon?: LucideIcon;
  badge?: string;
};

type NotchNavProps = {
  items: NotchItemData[];
  activeId?: string;
  position?: NotchPosition;
  logo?: ReactNode;
  rightContent?: ReactNode;
  showLogo?: boolean;
  showRightContent?: boolean;
  onActiveChange?: (id: string) => void;
  className?: string;
  children?: ReactNode;
};

function Island({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-11 items-center border border-border/50 bg-nav-surface text-nav-foreground backdrop-blur-xl",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

function MenuToggleButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="flex size-8 items-center justify-center rounded-full text-nav-foreground hover:bg-nav-icon-hover"
      aria-expanded={open}
      aria-controls="notch-compact-drawer"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onToggle}
    >
      {open ? <X className="size-4" /> : <Menu className="size-4" />}
    </button>
  );
}

function CompactNavDrawer({
  open,
  items,
  activeId,
  onActiveChange,
  onClose,
  showRightContent,
  rightContent,
  reduceMotion,
  includeRightContentInDrawer,
}: {
  open: boolean;
  items: NotchItemData[];
  activeId?: string;
  onActiveChange?: (id: string) => void;
  onClose: () => void;
  showRightContent: boolean;
  rightContent?: ReactNode;
  reduceMotion: boolean | null;
  includeRightContentInDrawer: boolean;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="notch-compact-drawer"
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: easePremium }}
          className="mt-2 overflow-hidden rounded-2xl bg-nav-surface p-2 filter-[drop-shadow(var(--nav-drop-shadow))]"
        >
          <ul className="flex flex-col">
            {items.map((item) => {
              const Icon = item.icon;
              const active = item.id === activeId;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onActiveChange?.(item.id);
                      onClose();
                    }}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-nav transition-colors",
                      active
                        ? "bg-nav-active text-nav-foreground"
                        : "text-nav-muted hover:bg-nav-icon-hover hover:text-nav-foreground"
                    )}
                  >
                    {Icon ? <Icon className="size-4" aria-hidden /> : null}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          {includeRightContentInDrawer && showRightContent ? (
            <div className="mt-2 border-t border-border px-2 py-3">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {rightContent}
              </div>
            </div>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function NotchNav({
  items,
  activeId,
  position = "top",
  logo,
  rightContent,
  showLogo = true,
  showRightContent = true,
  onActiveChange,
  className,
  children,
}: NotchNavProps) {
  const labelId = useId();
  const reduceMotion = useReducedMotion();
  const [compactMenuOpen, setCompactMenuOpen] = useState(false);

  const pinClass =
    position === "bottom"
      ? "bottom-4 md:bottom-6"
      : "top-3 md:top-5";

  const closeCompactMenu = () => setCompactMenuOpen(false);
  const toggleCompactMenu = () => setCompactMenuOpen((open) => !open);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 z-50 flex justify-center px-4 md:px-5",
        pinClass,
        className
      )}
    >
      <div className="pointer-events-auto mx-auto w-full max-w-full min-[1200px]:w-fit">
        {/* Desktop triple-island */}
        <nav
          aria-labelledby={labelId}
          className="hidden min-[1200px]:flex items-center justify-center gap-2 filter-[drop-shadow(var(--nav-drop-shadow))]"
        >
          <span id={labelId} className="sr-only">
            Primary
          </span>

          {showLogo && logo ? (
            <Island className="rounded-full pl-3 pr-2.5">{logo}</Island>
          ) : null}

          <Island className="rounded-full px-1">
            <ul className="flex items-center gap-0.5">
              {items.map((item) => {
                const Icon = item.icon;
                const active = item.id === activeId;

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onActiveChange?.(item.id)}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "relative flex h-8 items-center gap-1.5 rounded-full px-3 text-nav transition-colors duration-200",
                        active
                          ? "text-nav-foreground"
                          : "text-nav-muted hover:text-nav-foreground"
                      )}
                    >
                      {active ? (
                        <motion.span
                          layoutId={reduceMotion ? undefined : "notch-active"}
                          className="absolute inset-0 rounded-full bg-nav-active"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      ) : null}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {Icon ? <Icon className="size-3.5" aria-hidden /> : null}
                        {item.label}
                        {item.badge ? (
                          <span className="rounded-full bg-brand-soft px-1.5 py-px text-[10px] text-brand">
                            {item.badge}
                          </span>
                        ) : null}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Island>

          {showRightContent && rightContent ? (
            <Island className="rounded-full pl-2 pr-2.5">{rightContent}</Island>
          ) : null}
        </nav>

        {/* Tablet compact bar — logo + actions + menu */}
        <div className="hidden min-[768px]:max-[1199px]:flex w-full">
          <Island className="h-10 w-full justify-between rounded-2xl px-2.5 sm:h-11 sm:px-3 filter-[drop-shadow(var(--nav-drop-shadow))]">
            <div className="flex min-w-0 flex-1 items-center pr-2">
              {showLogo ? logo : null}
            </div>
            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
              {showRightContent ? rightContent : null}
              <MenuToggleButton open={compactMenuOpen} onToggle={toggleCompactMenu} />
            </div>
          </Island>

          <CompactNavDrawer
            open={compactMenuOpen}
            items={items}
            activeId={activeId}
            onActiveChange={onActiveChange}
            onClose={closeCompactMenu}
            showRightContent={showRightContent}
            rightContent={rightContent}
            reduceMotion={reduceMotion}
            includeRightContentInDrawer={false}
          />
        </div>

        {/* Mobile compact drawer */}
        <div className="md:hidden w-full">
          <Island className="h-10 w-full justify-between rounded-2xl px-2.5 sm:h-11 sm:px-3 filter-[drop-shadow(var(--nav-drop-shadow))]">
            <div className="flex min-w-0 flex-1 items-center pr-2">{showLogo ? logo : null}</div>
            <div className="flex shrink-0 items-center">
              <MenuToggleButton open={compactMenuOpen} onToggle={toggleCompactMenu} />
            </div>
          </Island>

          <CompactNavDrawer
            open={compactMenuOpen}
            items={items}
            activeId={activeId}
            onActiveChange={onActiveChange}
            onClose={closeCompactMenu}
            showRightContent={showRightContent}
            rightContent={rightContent}
            reduceMotion={reduceMotion}
            includeRightContentInDrawer
          />
        </div>

        {children ? (
          <div className="mt-6 flex justify-center">{children}</div>
        ) : null}
      </div>
    </div>
  );
}

export default NotchNav;
