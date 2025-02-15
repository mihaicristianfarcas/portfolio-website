interface WelcomeEmailProps {
  email: string
}

const WelcomeEmail: React.FC<Readonly<WelcomeEmailProps>> = ({ email }) => (
  <div>
    <h1>Thank you so much for subscribing!</h1>
    <p>
      You&apos;ve successfully subscribed to my newsletter using the email{' '}
      <strong>{email}</strong>.
    </p>
    <p>You&apos;ll receive updates on my latest blog posts and projects.</p>
    <p>
      If you have any questions, feedback or wish to unsubscribe, feel free to
      reply to this email and let me know.
    </p>
    <p>Best regards,</p>
    <p>
      <strong>Mihai-Cristian Farcaș</strong>
    </p>
  </div>
)

export default WelcomeEmail
