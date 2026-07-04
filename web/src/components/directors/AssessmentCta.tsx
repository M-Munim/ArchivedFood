"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { FiCheckCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Notch } from "./Notch";

const QUESTIONS = [
  {
    question: "What’s your role at the childcare center?",
    options: [
      "Director/Owner",
      "Leader teacher",
      "Assistant Teacher",
      "Food Service Staff",
    ],
  },
  {
    question:
      "How confident are you in recognizing signs of an allergic reaction?",
    options: [
      "Very confident",
      "Somewhat confident",
      "Not very confident",
      "Not confident at all",
    ],
  },
  {
    question: "When was your last food allergy safety training?",
    options: [
      "Within the last 6 months",
      "6-12 months ago",
      "Over a year ago",
      "Never had formal training",
    ],
  },
  {
    question: "Do you know how to use an epinephrine auto-injector?",
    options: [
      "Yes, I’ve had hands-on training",
      "Yes, but only from watching videos",
      "No, but I’d like to learn",
      "No, I’m not sure what that is",
    ],
  },
  {
    question: "How often do you review food labels for allergens?",
    options: [
      "Every time we serve food",
      "Sometimes, when we remember",
      "Only for known allergic children",
      "We don’t check labels regularly",
    ],
  },
] as const;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function AssessmentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstOptionRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !isComplete) {
      firstOptionRef.current?.focus();
    }
  }, [isOpen, isComplete, step]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentQuestion = QUESTIONS[step];

  function chooseAnswer(answer: string) {
    setAnswers((current) => {
      const next = [...current];
      next[step] = answer;
      return next;
    });

    if (step === QUESTIONS.length - 1) {
      setIsComplete(true);
    } else {
      setStep((current) => current + 1);
    }
  }

  function handleOptionKeyDown(
    event: ReactKeyboardEvent<HTMLButtonElement>,
    optionIndex: number,
  ) {
    if (
      !["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(event.key)
    ) {
      return;
    }

    event.preventDefault();
    const direction =
      event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const optionButtons =
      dialogRef.current?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
    if (!optionButtons?.length) return;

    const nextIndex =
      (optionIndex + direction + optionButtons.length) % optionButtons.length;
    optionButtons[nextIndex]?.focus();
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/65 p-4 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="assessment-dialog-title"
        aria-describedby="assessment-progress"
        className="relative max-h-[calc(100vh-2rem)] min-h-[390px] w-full max-w-[840px] overflow-y-auto bg-brand-cream px-5 py-12 shadow-2xl sm:min-h-[430px] sm:px-16 sm:py-16"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close assessment"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/60 sm:right-6 sm:top-6"
        >
          <IoClose className="h-7 w-7" aria-hidden="true" />
        </button>

        {isComplete ? (
          <div className="mx-auto flex min-h-[300px] max-w-[620px] flex-col items-center justify-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal-dark/10 text-brand-teal-dark">
              <FiCheckCircle className="h-9 w-9" aria-hidden="true" />
            </span>

            <h2
              id="assessment-dialog-title"
              className="mt-6 font-serif text-[28px] font-bold leading-tight text-ink sm:text-[34px]"
            >
              Thank you!
            </h2>

            <p className="mt-3 max-w-[460px] text-base leading-[1.4] text-ink/80 sm:text-lg">
              You&rsquo;ve completed the food allergy safety assessment. We&rsquo;ve
              put together a personalized set of free resources to help your center
              become food allergy ready.
            </p>

            <div className="mt-8 w-full rounded-2xl bg-white px-6 py-5 text-left sm:px-10">
              <p className="text-center text-sm font-semibold text-ink">
                Your free resources include:
              </p>
              <ul className="mx-auto mt-3 w-fit space-y-2 text-sm text-ink">
                <li className="flex items-center gap-2">
                  <FiCheckCircle
                    className="h-5 w-5 shrink-0 text-brand-teal-dark"
                    aria-hidden="true"
                  />
                  Emergency response protocol guide
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle
                    className="h-5 w-5 shrink-0 text-brand-teal-dark"
                    aria-hidden="true"
                  />
                  Staff training checklist
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              Get your free resources
            </Link>
          </div>
        ) : (
          <div className="mx-auto flex min-h-[300px] max-w-[620px] flex-col justify-center">
            <p id="assessment-progress" className="sr-only" aria-live="polite">
              Question {step + 1} of {QUESTIONS.length}
            </p>
            <h2
              id="assessment-dialog-title"
              className="mx-auto max-w-[560px] pr-5 text-center font-serif text-[25px] font-bold leading-[1.15] text-ink sm:pr-0 sm:text-[29px]"
            >
              {currentQuestion.question}
            </h2>

            <div
              role="radiogroup"
              aria-label={currentQuestion.question}
              className="mt-7 space-y-3"
            >
              {currentQuestion.options.map((option, optionIndex) => (
                <button
                  key={option}
                  ref={optionIndex === 0 ? firstOptionRef : undefined}
                  type="button"
                  role="radio"
                  aria-checked={answers[step] === option}
                  onClick={() => chooseAnswer(option)}
                  onKeyDown={(event) => handleOptionKeyDown(event, optionIndex)}
                  className="block min-h-11 w-full border border-ink/60 bg-transparent px-4 py-2.5 text-left text-sm text-ink transition-colors hover:border-ink hover:bg-white/55 focus-visible:bg-white/70"
                >
                  {option}
                </button>
              ))}
            </div>

            <div
              className="mt-7 flex justify-center gap-1.5"
              aria-hidden="true"
            >
              {QUESTIONS.map((question, index) => (
                <span
                  key={question.question}
                  className={`h-2 w-2 rounded-full ${
                    index === step ? "bg-ink" : "bg-ink/30"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function AssessmentCta() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  function openAssessment() {
    setIsOpen(true);
  }

  function closeAssessment() {
    setIsOpen(false);
    triggerRef.current?.querySelector("button")?.focus();
  }

  return (
    <>
      <section
        id="assessment"
        className="relative bg-brand-cream py-16 sm:py-20"
      >
        <Container>
          <div className="mx-auto max-w-5xl text-center ">
            <Eyebrow>Is Your Center Food Allergy Ready?</Eyebrow>
            <h2 className="mt-4 font-serif text-[32px] font-bold leading-[1.15] text-ink sm:text-[40px]">
              Is your center food allergy ready?
            </h2>
            <p className="mt-4 text-lg max-w-xl m-auto font-semibold text-ink">
              Take this quick assessment and receive a free, personalized
              roadmap for your team.
            </p>

            <ul className="mx-auto mt-8 max-w-5xl space-y-1 text-left text-lg leading-[1.35] text-ink ">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 select-none">
                  &bull;
                </span>
                <span>
                  <span className="font-semibold">Custom Plan:</span> A tailored
                  training roadmap based on your center&rsquo;s specific needs
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1 select-none">
                  &bull;
                </span>
                <span>
                  <span className="font-semibold">Free Resources:</span> Access
                  to premium training materials at no cost
                </span>
              </li>
            </ul>

            <div ref={triggerRef} className="mt-9 flex justify-center ">
              <Button type="button" onClick={openAssessment} className="px-6 py-3 text-sm font-semibold">
                Start the assessment
              </Button>
            </div>
          </div>
        </Container>

        <Notch colorClass="text-brand-cream" />
      </section>

      {isOpen && <AssessmentModal isOpen onClose={closeAssessment} />}
    </>
  );
}
