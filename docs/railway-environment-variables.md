# Railway Environment Variables Configuration

## Required Environment Variables

Configure these environment variables in your Railway service settings:

### Core Application Settings

```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://thecraftedhospitality.com
NEXT_PUBLIC_SITE_NAME=The Crafted Hospitality
```

### Optional - Analytics & Monitoring (for future implementation)

```env
# Google Analytics (when implemented)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX

# Performance monitoring
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

### Optional - Contact Form & Email (when implemented)

```env
# Email service API keys
CONTACT_EMAIL_API_KEY=your_email_service_api_key
EMAIL_FROM=noreply@thecraftedhospitality.com
EMAIL_TO=contact@thecraftedhospitality.com

# Email service provider (Resend, SendGrid, etc.)
RESEND_API_KEY=your_resend_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Optional - Database (if needed later)

```env
# Database connection
DATABASE_URL=your_database_connection_string
POSTGRES_URL=your_postgres_connection_string
```

### Optional - Authentication (if needed later)

```env
# NextAuth.js configuration
NEXTAUTH_SECRET=your_secret_for_auth
NEXTAUTH_URL=https://thecraftedhospitality.com
```

### Optional - External Services (when integrated)

```env
# CMS integration
CMS_API_KEY=your_cms_api_key
STRAPI_API_URL=your_strapi_url
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_token

# Payment processing
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Social media integration
INSTAGRAM_ACCESS_TOKEN=your_instagram_token
FACEBOOK_APP_ID=your_facebook_app_id
```

## Railway Automatic Environment Variables

Railway automatically provides these variables:

```env
PORT                        # Application port (automatically injected)
RAILWAY_ENVIRONMENT_NAME    # Environment name (production, staging, etc.)
RAILWAY_PROJECT_NAME        # Project name
RAILWAY_SERVICE_NAME        # Service name
RAILWAY_PROJECT_ID          # Unique project identifier
RAILWAY_SERVICE_ID          # Unique service identifier
```

## Environment Variable Setup in Railway

### Via Railway Dashboard

1. Go to your Railway project
2. Select your service
3. Navigate to the **Variables** tab
4. Add each environment variable with its value
5. Deploy or redeploy to apply changes

### Via Railway CLI

```bash
# Set individual variables
railway variables set NODE_ENV=production
railway variables set NEXT_PUBLIC_BASE_URL=https://thecraftedhospitality.com

# Set multiple variables from file
railway variables set --from-file .env.production
```

## Current Setup Status

### ✅ Currently Required (Minimal Setup)

For the initial deployment, only these variables are needed:

```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://thecraftedhospitality.com
```

### 🚧 Future Implementation

Additional environment variables will be needed when implementing:

- Contact forms and email functionality
- Analytics tracking (Google Analytics, etc.)
- Content management system integration
- User authentication features
- Database connectivity
- Payment processing

## Security Best Practices

1. **Never commit** actual environment variable values to the repository
2. **Use separate values** for staging and production environments
3. **Rotate secrets** regularly, especially API keys
4. **Use least privilege** principle for API keys and database access
5. **Monitor usage** of external services through their dashboards

## Validation

After setting environment variables in Railway:

1. Check that the application builds successfully
2. Verify that `process.env.NODE_ENV` equals `'production'`
3. Confirm that client-side variables (NEXT_PUBLIC_*) are accessible
4. Test any external service integrations
5. Monitor Railway deployment logs for any missing variable errors

## References

- [Railway Environment Variables Documentation](https://docs.railway.app/reference/variables)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) 