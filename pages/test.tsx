"use client";

import { useState, useEffect } from "react";
import { orgData } from "@/app/globals/constants";

// Define an interface for organization data
interface OrganizationData {
  orgId: string;
  orgName: string;
  subdomain: string;
  user_role_id: string;
  journey_id: string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  brandColor?: string;
}

export default function DemoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [brand_h, setBrand_h] = useState<string>("black");
  const [logo, setLogo] = useState<string>("");
  const [userData, setUserData] = useState<OrganizationData | null>(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  // On initial load, determine the subdomain and fetch corresponding org data
  useEffect(() => {
    const subdomain = getSubdomain();
    const org = orgData(capitalizeFirstLetter(subdomain));
    setUserData(org);
    setBrand_h(org.brandColor);
    setHasInitialized(true);
  }, []);

  // Capitalize first letter and lowercase the rest
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // Extract subdomain from current hostname
  function getSubdomain() {
    if (typeof window === "undefined") return "Demo";
    const host = window.location.hostname;
    const parts = host.split(".");
    if (parts.length >= 2 && parts[1].startsWith("localhost")) {
      return parts[0]; // Handle localhost subdomains
    }
    if (parts.length > 2) {
      return parts[0]; // Standard subdomain
    }
    return "Demo"; // Default fallback
  }

  useEffect(() => {
    if (!userData || !userData.orgId || !hasInitialized) return;

    if (userData.logo) {
      setLogo(userData.logo);
      return;
    }
  }, [userData, hasInitialized]);

  // Set timeout to clear loading state from sessionStorage after 45s
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      sessionStorage.removeItem("journey_loading");
    }, 45000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Start journey: create lead user, get tokenized URL, and redirect
  const handleStartJourney = async () => {
    setIsLoading(true);
    sessionStorage.setItem("journey_loading", "true");

    try {
      const response = await fetch("/api/next/create-lead-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orgId: userData!.orgId,
          userRoleId: userData!.user_role_id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const { userId } = await response.json();

      // Generate tokenized URL
      const dynamicPath = `${window.location.protocol}//${window.location.host}/`;
      const tokenResponse = await fetch("/api/next/tokenizeurl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          pwd: userId,
          path: dynamicPath,
        }),
      });

      if (!tokenResponse.ok) {
        throw new Error("Failed to generate tokenized URL");
      }

      const { tokenizedurl } = await tokenResponse.json();

      if (!tokenizedurl) {
        throw new Error("No tokenized URL received");
      }

      window.location.href = tokenizedurl;
    } catch (error) {
      setIsLoading(false);
      sessionStorage.removeItem("journey_loading");
      console.error("Journey error:", error);
    }
  };

  // Don't render anything until org data is initialized
  if (!hasInitialized || !userData) return null;

  return (
    <div className="relative bg-white lg:h-auto lg:flex lg:items-center transition-all duration-500 ease-in-out">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 px-10 xl:px-0">
        <div className="pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:pb-48 lg:pt-40 xl:col-span-6 flex items-center">
          <div className="">
            {logo && <img alt="Your Company" src={logo} className="h-11" />}

            <h1
              className={`${
                logo && "mt-24"
              } text-pretty text-5xl font-semibold tracking-tight sm:mt-10 sm:text-7xl transition-colors duration-300`}
              style={{ color: brand_h }}
            >
              {userData.title}
            </h1>

            <p className="mt-8 text-pretty md:text-lg font-medium text-gray-500 text-md">
              {userData.description}
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <button
                onClick={handleStartJourney}
                disabled={isLoading}
                style={{ backgroundColor: brand_h }}
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-300"
              >
                {/* wait for the link to load */}
                {isLoading ? (
                  <span className="flex items-center justify-center ">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Starting...
                  </span>
                ) : (
                  "Start Your Journey"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center lg:col-span-5 xl:absolute xl:inset-0 xl:left-1/2 rounded-lg">
          <img
            alt=""
            src={userData.image}
            className="aspect-[3/2] w-full object-contain lg:aspect-[3/4] lg:h-auto lg:max-h-[700px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
