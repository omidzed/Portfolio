import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
	const [state, handleSubmit] = useForm('xnnakdde');
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='bg-blue-500 p-4 rounded'>
			<label htmlFor='email'>Email Address</label>
			<input
				id='email'
				type='email'
				name='email'
				aria-label='Email Address'
				className='mt-1 p-2 border rounded'
			/>
			<ValidationError
				prefix='Email'
				field='email'
				errors={state.errors}
			/>
			<label htmlFor='message'>Message</label>
			<textarea
				id='message'
				name='message'
				aria-label='Message'
				className='mt-1 p-2 border rounded'
			/>
			<ValidationError
				prefix='Message'
				field='message'
				errors={state.errors}
			/>
			<button
				type='submit'
				disabled={state.submitting}
				className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300'>
				Submit
			</button>
		</form>
	);
}
