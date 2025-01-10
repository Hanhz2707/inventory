"use client";

import React, { useState } from "react";

/**
 * Type for the UserData (Mock Data)
 */
type UserData = {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
  };
  accountSettings: {
    username: string;
    password: string;
  };
  notificationPreferences: {
    emailNotifications: boolean;
    smsNotifications: boolean;
  };
  privacySettings: {
    profileVisibility: "public" | "private" | "friends-only";
    dataSharing: boolean;
  };
};

const mockUserData = {
  profile: {
    firstName: "Hanhz",
    lastName: "Pham",
    email: "HanhPham@mockemail.com",
    phone: "+358 123 456 789",
    avatar: "",
  },
  accountSettings: {
    username: "Hanhz",
    password: "********",
  },
  notificationPreferences: {
    emailNotifications: true,
    smsNotifications: false,
  },
  privacySettings: {
    profileVisibility: "public",
    dataSharing: false,
  },
};

const UserSettingsPage = () => {
  const [userData, setUserData] = useState(mockUserData);

  /**
   * Function to handle the input change
   *
   * @param section - Type keyof UserData
   * @param field - Type keyof UserData[T]
   * @param value - Type UserData[T][typeof field]
   */
  const handleInputChange = <T extends keyof UserData>(
    section: T,
    field: keyof UserData[T],
    value: UserData[T][typeof field]
  ) => {
    setUserData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Settings</h1>

      {/* Profile Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={userData.profile.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full"
          />
          <button className="px-5 py-2 bg-gray-800 text-white text-sm font-bold uppercase rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 transition-all duration-200">
            Change Avatar
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              value={userData.profile.firstName}
              onChange={(e) =>
                handleInputChange("profile", "firstName", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              value={userData.profile.lastName}
              onChange={(e) =>
                handleInputChange("profile", "lastName", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={userData.profile.email}
              onChange={(e) =>
                handleInputChange("profile", "email", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="text"
              value={userData.profile.phone}
              onChange={(e) =>
                handleInputChange("profile", "phone", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Account Settings Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={userData.accountSettings.username}
              onChange={(e) =>
                handleInputChange("accountSettings", "username", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={userData.accountSettings.password}
              onChange={(e) =>
                handleInputChange("accountSettings", "password", e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
        <div className="flex items-center gap-4 mb-4">
          <input
            type="checkbox"
            checked={userData.notificationPreferences.emailNotifications}
            onChange={(e) =>
              handleInputChange(
                "notificationPreferences",
                "emailNotifications",
                e.target.checked
              )
            }
            className="h-5 w-5"
          />
          <label>Email Notifications</label>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            checked={userData.notificationPreferences.smsNotifications}
            onChange={(e) =>
              handleInputChange(
                "notificationPreferences",
                "smsNotifications",
                e.target.checked
              )
            }
            className="h-5 w-5"
          />
          <label>SMS Notifications</label>
        </div>
      </div>

      {/* Privacy Settings Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Profile Visibility
            </label>
            <select
              value={userData.privacySettings.profileVisibility}
              onChange={(e) =>
                handleInputChange(
                  "privacySettings",
                  "profileVisibility",
                  e.target.value as "public" | "private" | "friends-only"
                )
              }
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends-only">Friends Only</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Data Sharing
            </label>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={userData.privacySettings.dataSharing}
                onChange={(e) =>
                  handleInputChange(
                    "privacySettings",
                    "dataSharing",
                    e.target.checked
                  )
                }
                className="h-5 w-5"
              />
              <label>Allow Data Sharing</label>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-6">
        <button className="px-5 py-2 bg-gray-800 text-white text-sm font-bold uppercase rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 transition-all duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserSettingsPage;
