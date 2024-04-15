'use client';

import React from 'react'

import checkIfRedirect from "@/lib/urlProofing";
import { User } from "@/pages/api/user";
import { useEffect, useState } from "react";

export default function Page() {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		setUser(JSON.parse(sessionStorage.getItem('user') || '{}'));
		checkIfRedirect('/user');
	  }, []);

	return (
		<div>
			<h2>Calender</h2>
		</div>
	)
}