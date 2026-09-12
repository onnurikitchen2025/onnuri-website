document.addEventListener('DOMContentLoaded', () => {

  if (document.getElementById('feedbackOpen')) {
    return;
  }

  const feedbackWidget = document.createElement('div');

  feedbackWidget.innerHTML = `
    <!-- WEBSITE FEEDBACK -->

    <button type="button"
            class="feedback-floating-btn"
            id="feedbackOpen"
            aria-label="Report a website issue">

      <span class="feedback-icon">⚠</span>
      <span class="feedback-label">Feedback</span>

    </button>

    <div class="feedback-modal"
         id="feedbackModal">

      <div class="feedback-box">

        <button type="button"
                class="feedback-close"
                id="feedbackClose"
                aria-label="Close feedback form">
          ×
        </button>

        <p class="section-label">
          WEBSITE TESTING
        </p>

        <h3>
          Report an Issue
        </h3>

        <p class="feedback-description">
          Found an error or something that doesn't work correctly?
          Let us know so we can improve the website.
        </p>

        <form id="feedbackForm"
              action="https://formsubmit.co/onnurikitchen2025@gmail.com"
              method="POST">

          <input type="hidden"
                 name="_subject"
                 value="Onnuri Website Feedback">

          <input type="hidden"
                 name="_captcha"
                 value="false">

          <input type="hidden"
                 name="Page"
                 id="feedbackPage">

          <input type="hidden"
                 name="Screen Size"
                 id="feedbackScreen">

          <input type="hidden"
                 name="Browser"
                 id="feedbackBrowser">

          <input type="hidden"
                 name="Date & Time"
                 id="feedbackDate">

          <select id="feedbackType"
                  name="Issue Type"
                  required>

            <option value="">
              Select issue type
            </option>

            <option>
              Broken Button / Link
            </option>

            <option>
              Wrong Product Information
            </option>

            <option>
              Layout / Display Problem
            </option>

            <option>
              Quote List Problem
            </option>

            <option>
              Other
            </option>

          </select>

          <textarea id="feedbackMessage"
                    name="Feedback"
                    placeholder="Describe the problem..."
                    required></textarea>

          <button type="submit"
                  class="feedback-submit">
            SUBMIT FEEDBACK
          </button>

        </form>

      </div>

    </div>
  `;

  document.body.appendChild(feedbackWidget);

});
