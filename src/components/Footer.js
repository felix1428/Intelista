import React from 'react';
import must from "../images/must.png";

export default function Footer() {
  return (
    <footer className="px-4 divide-y bg-opacity-40  bg-black dark:bg-gray-100 text-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
	<div className="lg:w-1/3">
		<div className="flex items-center justify-center w-12 h-12 rounded-full">
			<img src={must} className="flex-shrink-0 w-18 h-18 rounded-full text-gray-900 dark:text-gray-50" alt="Description" />
		</div>
		<span className="pirate self-center text-2xl font-semibold">I N T E L I S T A</span>
		</div>

		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Co Ordinator</h3>
				<ul className="space-y-1">
					<li>
						<p rel="noopener noreferrer">Shanmugam</p>
					</li>
					<li>
						<p rel="noopener noreferrer">Contact +91 99620 75982</p>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50 dark:text-gray-900">Head Of the Department</h3>
				<ul className="space-y-1">
					<li>
						<p rel="noopener noreferrer">Dr.V. Belmer Gladson</p>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase text-gray-50 dark:text-gray-900">Developers</h3>
				<ul className="space-y-1">
					<li>
						<p rel="noopener noreferrer" > Nathaniel Felix L & Gokul P</p>
					</li>
					<li>
						<p rel="noopener noreferrer">Any technical issue contact us : +91 90477 69425</p>
						<li>
						<p rel="noopener noreferrer">+91 97861 83710</p>
						</li>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase text-gray-50 dark:text-gray-900">Social media</div>
				<div className="flex justify-start space-x-4">
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						title="Facebook"
						className="flex items-center p-2 transition-colors duration-200 hover:text-blue-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 32 32"
							className="w-6 h-6 fill-current"
						>
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>

					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						title="Twitter"
						className="flex items-center p-2 transition-colors duration-200 hover:text-blue-400"
					>
						<svg
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6 fill-current"
						>
							<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
						</svg>
					</a>

					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						title="Instagram"
						className="flex items-center p-2 transition-colors duration-200 hover:text-pink-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							fill="currentColor"
							className="w-6 h-6 fill-current"
						>
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.703-0.072 2.197-0.084 6.469-0.084zM16 7.787c-4.525 0-8.213 3.692-8.213 8.213 0 4.525 3.692 8.213 8.213 8.213s8.213-3.692 8.213-8.213c0-4.525-3.688-8.213-8.213-8.213zM16 21.817c-3.198 0-5.787-2.589-5.787-5.787s2.589-5.787 5.787-5.787 5.787 2.589 5.787 5.787c0 3.198-2.589 5.787-5.787 5.787zM25.771 6.573c-1.057 0-1.914 0.86-1.914 1.914s0.857 1.914 1.914 1.914 1.914-0.86 1.914-1.914-0.86-1.914-1.914-1.914z"></path>
						</svg>
					</a>

					<a
						href="https://www.linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						title="LinkedIn"
						className="flex items-center p-2 transition-colors duration-200 hover:text-blue-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							fill="currentColor"
							className="w-6 h-6 fill-current"
						>
							<path d="M29 0h-26c-1.656 0-3 1.344-3 3v26c0 1.656 1.344 3 3 3h26c1.656 0 3-1.344 3-3v-26c0-1.656-1.344-3-3-3zM9.394 27h-4.9v-14h4.9v14zM7.175 10.733c-1.573 0-2.85-1.276-2.85-2.85s1.276-2.85 2.85-2.85 2.85 1.276 2.85 2.85-1.276 2.85-2.85 2.85zM27.395 27h-4.894v-7.333c0-3.854-4.582-3.573-4.582 0v7.333h-4.9v-14h4.9v1.967c2.116-3.77 9.476-4.055 9.476 3.592v8.442z"></path>
						</svg>
					</a>
				</div>

			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-400 dark:text-gray-600">© Team Design Freaks . All rights reserved.</div>
</footer>

  );
}